
namespace Application.Features.CreateRegistration;

using Application.Abstractions.Data;
using Application.Abstractions.Messaging;
using Domain.Common;
using Domain.Entities;
using Domain.Rules;
using Microsoft.EntityFrameworkCore;

public sealed class CreateRegistrationCommandHandler
    : ICommandHandler<CreateRegistrationCommand, Result<CreateRegistrationResponse>>
{
    private readonly IAppDbContext _dbContext;

    public CreateRegistrationCommandHandler(IAppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Result<CreateRegistrationResponse>> HandleAsync(
        CreateRegistrationCommand command,
        CancellationToken cancellationToken = default)
    {
        var plateExists = await _dbContext.Registrations
            .AnyAsync(
                r => r.PlateNumber == command.PlateNumber,
                cancellationToken);

        if (plateExists)
        {
            return Result<CreateRegistrationResponse>.Failure(
                new Error(
                    "Registration.Conflict",
                    "A registration with this plate number already exists."));
        }

        var lastRegistrationNumber = await _dbContext.Registrations
            .OrderByDescending(r => r.RegistrationNumber)
            .Select(r => r.RegistrationNumber)
            .FirstOrDefaultAsync(cancellationToken);

        var nextNumber = 1;

        if (!string.IsNullOrEmpty(lastRegistrationNumber))
        {
            var numberPart = lastRegistrationNumber.Split('-')[1];
            nextNumber = int.Parse(numberPart) + 1;
        }

        var registration = new Registration
        {
            RegistrationNumber = $"CS27-{nextNumber:D4}",
            RegistrationDate = DateTime.UtcNow,
            ParticipantName = command.ParticipantName,
            ContactNumber = command.ContactNumber,
            Email = command.Email,
            Address = command.Address,
            CarMakeModel = command.CarMakeModel,
            PlateNumber = command.PlateNumber,
            RegistrationType = command.RegistrationType,
            RegistrationFee = RegistrationFeeRules.GetFee(
                command.RegistrationType),
            AmountPaid = command.AmountPaid
        };

        _dbContext.Registrations.Add(registration);

        await _dbContext.SaveChangesAsync(cancellationToken);

        return Result<CreateRegistrationResponse>.Success(
            new CreateRegistrationResponse(
                registration.Id,
                registration.RegistrationNumber,
                registration.RegistrationDate,
                registration.RegistrationFee,
                registration.AmountPaid,
                registration.PaymentStatus,
                registration.Status
            ));
    }
}

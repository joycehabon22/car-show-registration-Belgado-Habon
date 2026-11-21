namespace Application.Features.GetRegistrations;

using Application.Abstractions.Data;
using Application.Abstractions.Messaging;
using Microsoft.EntityFrameworkCore;

public sealed class GetRegistrationsQueryHandler
    : IQueryHandler<GetRegistrationsQuery, GetRegistrationsResponse>
{
    private readonly IAppDbContext _dbContext;

    public GetRegistrationsQueryHandler(IAppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<GetRegistrationsResponse> HandleAsync(
        GetRegistrationsQuery query,
        CancellationToken cancellationToken = default)
    {
        var registrations = _dbContext.Registrations.AsNoTracking();

        if (query.RegistrationType.HasValue)
        {
            registrations = registrations.Where(
                r => r.RegistrationType == query.RegistrationType.Value);
        }

        if (query.Status.HasValue)
        {
            registrations = registrations.Where(
                r => r.Status == query.Status.Value);
        }

        if (!string.IsNullOrWhiteSpace(query.ParticipantName))
        {
            registrations = registrations.Where(
                r => r.ParticipantName.Contains(query.ParticipantName));
        }

        var totalCount = await registrations.CountAsync(cancellationToken);

        var registrationRecords = await registrations
            .OrderByDescending(r => r.RegistrationDate)
            .Skip((query.Page - 1) * query.PageSize)
            .Take(query.PageSize)
            .ToListAsync(cancellationToken);

        var items = registrationRecords.Select(r =>
            new RegistrationListItemResponse(
                r.Id,
                r.RegistrationNumber,
                r.RegistrationDate,
                r.ParticipantName,
                r.ContactNumber,
                r.Email,
                r.CarMakeModel,
                r.PlateNumber,
                r.RegistrationType,
                r.Status,
                r.RegistrationFee,
                r.AmountPaid,
                r.PaymentStatus
            )).ToList();

        var totalPages = (int)Math.Ceiling(
            totalCount / (double)query.PageSize);

        return new GetRegistrationsResponse(
            items,
            totalCount,
            query.Page,
            query.PageSize,
            totalPages
        );
    }
}
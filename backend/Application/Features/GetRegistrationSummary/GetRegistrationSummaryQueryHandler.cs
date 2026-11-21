namespace Application.Features.GetRegistrationSummary;

using Application.Abstractions.Data;
using Application.Abstractions.Messaging;
using Domain.Enums;
using Microsoft.EntityFrameworkCore;

public sealed class GetRegistrationSummaryQueryHandler
    : IQueryHandler<GetRegistrationSummaryQuery, GetRegistrationSummaryResponse>
{
    private readonly IAppDbContext _dbContext;

    public GetRegistrationSummaryQueryHandler(IAppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<GetRegistrationSummaryResponse> HandleAsync(
        GetRegistrationSummaryQuery query,
        CancellationToken cancellationToken = default)
    {
        var registrations = await _dbContext.Registrations
            .AsNoTracking()
            .ToListAsync(cancellationToken);

        return new GetRegistrationSummaryResponse(
            registrations.Count,

            registrations.Count(r =>
                r.RegistrationType == RegistrationType.Exhibitor),

            registrations.Count(r =>
                r.RegistrationType == RegistrationType.Competitor),

            registrations.Count(r =>
                r.RegistrationType == RegistrationType.VIP),

            registrations.Count(r =>
                r.Status == RegistrationStatus.Pending),

            registrations.Count(r =>
                r.Status == RegistrationStatus.Confirmed),

            registrations.Count(r =>
                r.Status == RegistrationStatus.CheckedIn),

            registrations.Count(r =>
                r.Status == RegistrationStatus.Cancelled),

            registrations.Sum(r => r.AmountPaid),

            registrations.Sum(r => r.RegistrationFee - r.AmountPaid)
        );
    }
}
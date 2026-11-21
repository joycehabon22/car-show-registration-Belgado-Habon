namespace Application.Features.GetRegistrationSummary;

public sealed record GetRegistrationSummaryResponse(
    int TotalRegistrations,
    int ExhibitorCount,
    int CompetitorCount,
    int VipCount,
    int PendingCount,
    int ConfirmedCount,
    int CheckedInCount,
    int CancelledCount,
    decimal TotalCollected,
    decimal TotalOutstanding
);
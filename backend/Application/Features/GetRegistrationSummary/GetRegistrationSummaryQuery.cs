namespace Application.Features.GetRegistrationSummary;

using Application.Abstractions.Messaging;

public sealed record GetRegistrationSummaryQuery
    : IQuery<GetRegistrationSummaryResponse>;
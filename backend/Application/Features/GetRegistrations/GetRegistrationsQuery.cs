namespace Application.Features.GetRegistrations;

using Application.Abstractions.Messaging;
using Domain.Enums;

public sealed record GetRegistrationsQuery(
    RegistrationType? RegistrationType,
    RegistrationStatus? Status,
    string? ParticipantName,
    int Page = 1,
    int PageSize = 10
) : IQuery<GetRegistrationsResponse>;
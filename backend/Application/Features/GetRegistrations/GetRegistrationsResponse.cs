namespace Application.Features.GetRegistrations;

using Domain.Enums;

public sealed record GetRegistrationsResponse(
    IReadOnlyList<RegistrationListItemResponse> Items,
    int TotalCount,
    int Page,
    int PageSize,
    int TotalPages
);

public sealed record RegistrationListItemResponse(
    Guid Id,
    string RegistrationNumber,
    DateTime RegistrationDate,
    string ParticipantName,
    string ContactNumber,
    string Email,
    string CarMakeModel,
    string PlateNumber,
    RegistrationType RegistrationType,
    RegistrationStatus Status,
    decimal RegistrationFee,
    decimal AmountPaid,
    PaymentStatus PaymentStatus
);
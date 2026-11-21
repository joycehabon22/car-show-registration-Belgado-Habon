
namespace Application.Features.CreateRegistration;

using Domain.Enums;

public sealed record CreateRegistrationResponse(
    Guid Id,
    string RegistrationNumber,
    DateTime RegistrationDate,
    decimal RegistrationFee,
    decimal AmountPaid,
    PaymentStatus PaymentStatus,
    RegistrationStatus Status
);

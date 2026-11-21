namespace Application.Features.GetRegistrationById;

using Application.Abstractions.Messaging;
using Domain.Common;

public sealed record GetRegistrationByIdQuery(Guid Id)
    : IQuery<Result<GetRegistrationByIdResponse>>;
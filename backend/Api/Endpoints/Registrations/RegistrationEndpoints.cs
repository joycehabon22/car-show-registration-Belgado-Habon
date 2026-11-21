
namespace Api.Endpoints.Registrations;

using Api.Common.Extensions;
using Application.Abstractions.Messaging;
using Application.Features.CreateRegistration;
using Domain.Common;
using FluentValidation;

public static class RegistrationEndpoints
{
    public static void MapRegistrationEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/api/registrations")
            .WithTags("Registrations");

        group.MapPost("/", async (
            CreateRegistrationCommand command,
            ICommandHandler<CreateRegistrationCommand, Result<CreateRegistrationResponse>> handler,
            IValidator<CreateRegistrationCommand> validator,
            CancellationToken cancellationToken) =>
        {
            var validationResult = await validator.ValidateAsync(
                command,
                cancellationToken);

            if (!validationResult.IsValid)
            {
                return Results.ValidationProblem(
                    validationResult.ToDictionary());
            }

            var result = await handler.HandleAsync(
                command,
                cancellationToken);

            if (!result.IsSuccess)
            {
                return result.ToProblemDetails();
            }

            return Results.Created(
                $"/api/registrations/{result.Value!.Id}",
                result.Value);
        })
        .WithName("CreateRegistration")
        .WithSummary("Create a new car show registration")
        .WithDescription("Creates a registration and generates its registration number and fee.")
        .Produces<CreateRegistrationResponse>(StatusCodes.Status201Created)
        .ProducesValidationProblem()
        .ProducesProblem(StatusCodes.Status409Conflict);
    }
}

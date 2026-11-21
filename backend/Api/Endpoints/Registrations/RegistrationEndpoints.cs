
namespace Api.Endpoints.Registrations;

using Api.Common.Extensions;
using Application.Abstractions.Messaging;
using Application.Features.CreateRegistration;
using Application.Features.GetRegistrations;
using Application.Features.GetRegistrationById;
using Domain.Common;
using Domain.Enums;
using FluentValidation;
using Application.Features.GetRegistrationSummary;

public static class RegistrationEndpoints
{
    public static void MapRegistrationEndpoints(this IEndpointRouteBuilder app)
    {
        var group = app.MapGroup("/api/registrations")
            .WithTags("Registrations");

        // POST: Create Registration
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

        // GET: Get All Registrations
        group.MapGet("/", async (
            IQueryHandler<GetRegistrationsQuery, GetRegistrationsResponse> handler,
            CancellationToken cancellationToken,
            RegistrationType? type = null,  
            RegistrationStatus? status = null,
            string? participantName = null,
            int page = 1,
            int pageSize = 10) =>
        {
            if (page < 1 || pageSize < 1 || pageSize > 50)
            {
                return Results.BadRequest(new
                {
                    message = "Page must be at least 1 and pageSize must be between 1 and 50."
                });
            }

            var query = new GetRegistrationsQuery(
    type,
    status,
    participantName,
    page,
    pageSize);

            var result = await handler.HandleAsync(
                query,
                cancellationToken);

            return Results.Ok(result);
        })
        .WithName("GetRegistrations")
        .WithSummary("Get all car show registrations")
        .WithDescription("Gets registrations with optional filters and pagination.")
        .Produces<GetRegistrationsResponse>(StatusCodes.Status200OK)
        .Produces(StatusCodes.Status400BadRequest);


        // GET: Get Registration Summary
        group.MapGet("/summary", async (
            IQueryHandler<GetRegistrationSummaryQuery, GetRegistrationSummaryResponse> handler,
            CancellationToken cancellationToken) =>
        {
            var query = new GetRegistrationSummaryQuery();

            var result = await handler.HandleAsync(
                query,
                cancellationToken);

            return Results.Ok(result);
        })
        .WithName("GetRegistrationSummary")
        .WithSummary("Get car show registration summary")
        .WithDescription("Gets registration totals, status breakdown, and payment summary.")
        .Produces<GetRegistrationSummaryResponse>(StatusCodes.Status200OK);



        // GET: Get Registration By ID
        group.MapGet("/{id:guid}", async (
            Guid id,
            IQueryHandler<GetRegistrationByIdQuery, Result<GetRegistrationByIdResponse>> handler,
            CancellationToken cancellationToken) =>
        {
            var query = new GetRegistrationByIdQuery(id);

            var result = await handler.HandleAsync(
                query,
                cancellationToken);

            if (!result.IsSuccess)
            {
                return result.ToProblemDetails();
            }

            return Results.Ok(result.Value);
        })
        .WithName("GetRegistrationById")
        .WithSummary("Get a car show registration by ID")
        .WithDescription("Gets a single registration using its unique ID.")
        .Produces<GetRegistrationByIdResponse>(StatusCodes.Status200OK)
        .ProducesProblem(StatusCodes.Status404NotFound);
    }


}

namespace Application.Features.CreateRegistration;

using Domain.Enums;
using Domain.Rules;
using FluentValidation;

public sealed class CreateRegistrationCommandValidator
    : AbstractValidator<CreateRegistrationCommand>
{
    public CreateRegistrationCommandValidator()
    {
        RuleFor(x => x.ParticipantName)
            .NotEmpty()
            .MaximumLength(150);

        RuleFor(x => x.ContactNumber)
            .NotEmpty()
            .Matches(@"^09\d{9}$")
            .WithMessage("Contact number must start with 09 and contain exactly 11 digits.");

        RuleFor(x => x.Email)
            .NotEmpty()
            .EmailAddress()
            .MaximumLength(200);

        RuleFor(x => x.Address)
            .NotEmpty()
            .MaximumLength(300);

        RuleFor(x => x.CarMakeModel)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(x => x.PlateNumber)
            .NotEmpty()
            .MaximumLength(15);

        RuleFor(x => x.RegistrationType)
            .IsInEnum()
            .WithMessage("Invalid registration type.");

        RuleFor(x => x.AmountPaid)
            .GreaterThanOrEqualTo(0)
            .Must((command, amountPaid) =>
                Enum.IsDefined(command.RegistrationType) &&
                amountPaid <= RegistrationFeeRules.GetFee(command.RegistrationType))
            .WithMessage("Amount paid cannot exceed the registration fee.");
    }
}

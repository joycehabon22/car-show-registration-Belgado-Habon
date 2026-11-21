
namespace Infrastructure.Persistence.Seeding;

using Domain.Entities;
using Domain.Enums;
using Domain.Rules;
using Microsoft.EntityFrameworkCore;

public static class RegistrationSeeder
{
    public static async Task SeedAsync(AppDbContext dbContext)
    {
        var names = new[]
        {
            "Juan Dela Cruz", "Maria Santos", "Pedro Reyes",
            "Ana Garcia", "Mark Rivera", "Sofia Mendoza",
            "Carlo Bautista", "Angela Cruz", "Daniel Flores",
            "Bea Ramos", "Miguel Torres", "Lara Castillo",
            "Paolo Fernandez", "Nicole Lim", "Gabriel Aquino",
            "Trisha Gomez", "Rafael Navarro", "Camille Diaz",
            "Adrian Lopez", "Isabella Tan", "Joshua Perez",
            "Mikaela Soriano", "Nathan Villanueva",
            "Chloe Martinez", "Ethan Valdez"
        };

        var types = new[]
        {
            RegistrationType.Exhibitor,
            RegistrationType.Competitor,
            RegistrationType.VIP
        };

        var statuses = new[]
        {
            RegistrationStatus.Pending,
            RegistrationStatus.Confirmed,
            RegistrationStatus.CheckedIn,
            RegistrationStatus.Cancelled
        };

       for (int i = 1; i <= 25; i++)
{
    var registrationNumber = $"CS27-{i:0000}";

    var type = types[(i - 1) % types.Length];
    var fee = RegistrationFeeRules.GetFee(type);

    decimal amountPaid = (i % 3) switch
    {
        0 => fee,
        1 => 0m,
        _ => fee / 2
    };

    var existing = await dbContext.Registrations
        .FirstOrDefaultAsync(r => r.RegistrationNumber == registrationNumber);

    if (existing != null)
    {
        // Preserve the original three registrations.
        if (i >= 4)
        {
            existing.AmountPaid = amountPaid;
        }

        continue;
    }

    var registration = new Registration
    {
        Id = Guid.NewGuid(),
        RegistrationNumber = registrationNumber,
        RegistrationDate = DateTime.UtcNow.AddDays(-i),
        ParticipantName = names[i - 1],
        ContactNumber = $"0917{i:0000000}",
        Email = $"participant{i}@example.com",
        Address = "Sorsogon City, Philippines",
        CarMakeModel = $"Toyota Model {i}",
        PlateNumber = $"SEED{i:000}",
        RegistrationType = type,
        Status = statuses[(i - 1) % statuses.Length],
        RegistrationFee = fee,
        AmountPaid = amountPaid
    };

    dbContext.Registrations.Add(registration);
}

await dbContext.SaveChangesAsync();
    }
}

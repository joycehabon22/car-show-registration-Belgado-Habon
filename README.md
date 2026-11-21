# Car Show Registration System

A web-based Car Show Registration System developed as an Integrative Programming 2 final project. The system is designed to manage car show participant registrations, registration fees, and payment records.

## Project Structure

The project follows the **Vertical Slice Architecture** approach, organizing application features based on their specific responsibilities.

```text
car-show-registration/
│
├── backend/
│   │
│   ├── Api/
│   │   ├── Common/
│   │   │   └── Extensions/
│   │   │       └── ResultExtensions.cs
│   │   │
│   │   ├── Endpoints/
│   │   │   └── Registrations/
│   │   │       └── RegistrationEndpoints.cs
│   │   │
│   │   ├── Properties/
│   │   ├── Program.cs
│   │   ├── appsettings.json
│   │   ├── appsettings.Development.json
│   │   ├── Api.csproj
│   │   └── Api.http
│   │
│   ├── Application/
│   │   ├── Abstractions/
│   │   │   ├── Data/
│   │   │   │   └── IAppDbContext.cs
│   │   │   │
│   │   │   └── Messaging/
│   │   │       ├── ICommand.cs
│   │   │       ├── ICommandHandler.cs
│   │   │       ├── IQuery.cs
│   │   │       └── IQueryHandler.cs
│   │   │
│   │   ├── Features/
│   │   │   ├── CreateRegistration/
│   │   │   │   ├── CreateRegistrationCommand.cs
│   │   │   │   ├── CreateRegistrationCommandValidator.cs
│   │   │   │   ├── CreateRegistrationHandler.cs
│   │   │   │   └── CreateRegistrationResponse.cs
│   │   │   │
│   │   │   ├── GetRegistrationById/
│   │   │   │   ├── GetRegistrationByIdQuery.cs
│   │   │   │   ├── GetRegistrationByIdQueryHandler.cs
│   │   │   │   └── GetRegistrationByIdResponse.cs
│   │   │   │
│   │   │   ├── GetRegistrations/
│   │   │   │   ├── GetRegistrationsQuery.cs
│   │   │   │   ├── GetRegistrationsQueryHandler.cs
│   │   │   │   └── GetRegistrationsResponse.cs
│   │   │   │
│   │   │   └── GetRegistrationSummary/
│   │   │       ├── GetRegistrationSummaryQuery.cs
│   │   │       ├── GetRegistrationSummaryQueryHandler.cs
│   │   │       └── GetRegistrationSummaryResponse.cs
│   │   │
│   │   └── Application.csproj
│   │
│   ├── Domain/
│   │   ├── Common/
│   │   │   ├── BaseEntity.cs
│   │   │   └── Result.cs
│   │   │
│   │   ├── Entities/
│   │   │   └── Registration.cs
│   │   │
│   │   ├── Enums/
│   │   │   ├── PaymentStatus.cs
│   │   │   ├── RegistrationStatus.cs
│   │   │   └── RegistrationType.cs
│   │   │
│   │   ├── Rules/
│   │   │   └── RegistrationFeeRules.cs
│   │   │
│   │   └── Domain.csproj
│   │
│   ├── Infrastructure/
│   │   ├── Persistence/
│   │   │   ├── Migrations/
│   │   │   │   ├── InitialCreate.cs
│   │   │   │   ├── InitialCreate.Designer.cs
│   │   │   │   └── AppDbContextModelSnapshot.cs
│   │   │   │
│   │   │   ├── Seeding/
│   │   │   │   └── RegistrationSeeder.cs
│   │   │   │
│   │   │   └── AppDbContext.cs
│   │   │
│   │   └── Infrastructure.csproj
│   │
│   └── VerticalSlice.slnx
│
├── frontend/
│   └── ()
│
├── docs/
│   └── screenshots/
│       └── (Backend API testing screenshots)
│
├── .gitignore
└── README.md
```

### Folder and File Responsibilities

| Folder | Description |
|---|---|
| `Api` | Handles HTTP requests, API endpoints, application configuration, and response formatting. |
| `Application` | Contains the application features, commands, queries, handlers, validators, and abstractions. |
| `Domain` | Contains the core entities, enums, business rules, and result pattern. |
| `Infrastructure` | Handles database configuration, Entity Framework Core migrations, and database seeding. |
| `frontend` | Reserved for the React frontend, which is still under development. |
| `docs/screenshots` | Contains screenshots of backend API testing and documentation. |

## Technologies Used

| Technology | Purpose |
|---|---|
| C# | Backend programming language |
| .NET 10 | Backend framework |
| ASP.NET Core Minimal API | Building HTTP API endpoints |
| Entity Framework Core | Database access and management |
| SQLite | Relational database |
| FluentValidation | Request validation |
| Scalar | API documentation and testing |
| React | Planned frontend framework |

## Backend Features

The backend currently supports the following features:

- **Create Registration** – Registers participants for the car show.
- **View Registrations** – Retrieves registration records with pagination and filtering.
- **View Registration Details** – Retrieves a specific registration using its ID.
- **Registration Summary** – Provides summarized registration and payment information.
- **Automatic Registration Number** – Generates unique registration numbers.
- **Registration Fee Rules** – Assigns fees based on registration type.
- **Payment Tracking** – Tracks the amount paid and determines payment status.
- **Data Validation** – Validates registration details and prevents duplicate plate numbers.

## Registration Types and Fees

| Registration Type | Registration Fee |
|---|---:|
| Exhibitor | ₱1,500 |
| Competitor | ₱2,500 |
| VIP | ₱5,000 |

Payment status is automatically determined based on the registration fee and the amount paid.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/registrations` | Creates a new registration. |
| GET | `/api/registrations` | Retrieves registration records. |
| GET | `/api/registrations/{id}` | Retrieves a registration by ID. |
| GET | `/api/registrations/summary` | Retrieves registration and payment summary. |

## Getting Started

### Prerequisites

Make sure the following are installed:

- .NET 10 SDK
- Visual Studio 2022 or later
- Git

### Running the Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/joycehabon22/car-show-registration-Belgado-Habon.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd car-show-registration/backend
   ```

3. Restore the dependencies:

   ```bash
   dotnet restore
   ```

4. Build the solution:

   ```bash
   dotnet build VerticalSlice.slnx
   ```

5. Run the API:

   ```bash
   dotnet run --project Api/Api.csproj
   ```

6. Open the API documentation in your browser:

   ```text
   http://localhost:5205/scalar/v1
   ```

## Architecture

The project uses **Vertical Slice Architecture**, where application code is organized around individual features rather than traditional technical layers alone.

It also uses the following patterns and practices:

- **CQRS (Command Query Responsibility Segregation)** – Separates operations that change data from operations that retrieve data.
- **Result Pattern** – Provides a consistent way to handle successful operations and errors.
- **Dependency Injection** – Manages dependencies between application components.
- **Repository-free Data Access through DbContext** – Uses Entity Framework Core through the application database abstraction.

## Error Handling

The API uses appropriate HTTP status codes when handling requests:

| Status Code | Description |
|---|---|
| 200 | Request completed successfully. |
| 201 | Registration created successfully. |
| 400 | Invalid request or validation error. |
| 404 | Requested registration was not found. |
| 409 | Conflict, such as a duplicate plate number. |

## Development Team

| Team Member | Role | Responsibilities |
|---|---|---|
| Joyce Marie Habon | Backend Developer | Develops the backend API, manages the database, implements registration features and business logic, handles data validation, and performs backend testing. |
| Marcus Josei Belgado | Frontend Developer | Develops the React frontend, creates user interface components, integrates the frontend with the backend API, and performs frontend testing. |

## Project Status

The backend API is implemented, including registration management, database integration, validation, and API documentation. Frontend development and backend-frontend integration are still in progress.

---

**Car Show Registration System**  
*Integrative Programming 2 Final Project*
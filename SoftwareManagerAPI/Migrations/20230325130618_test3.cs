using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SoftwareManagerAPI.Migrations
{
    public partial class test3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User001",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "ddd9ca4a-f575-4cc6-ad58-df20959b7a64", "AQAAAAEAACcQAAAAEJeaFtcdaVS7ixJcFhrkU30uuclsPVQKDv7+nVekMEvEwp5IJT3c08swOVWugSTNSw==", "8b1a1a63-6a07-46e0-bf1b-26b2a0933a41" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User002",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "aefac04f-ff3a-4a35-b9c1-1e033e3ff8a7", "AQAAAAEAACcQAAAAECJPyb4Zl+MvRbHfnVNiwUcnf3PNPpe0Aubt9mWnZ2EO+xvabO2v3DwPavXN3TIHZg==", "b0120ed6-2ff8-48ef-97d0-76418b10d8fb" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User003",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "7d979d68-6916-415e-906f-255b1c13ba59", "AQAAAAEAACcQAAAAEKnEbZqWzU7sajcCUjgHIgK1WvM5VFoe33QAcwJSd7Cspor9hT+XgkJB8rH6sQJUXA==", "13ebba5a-6092-498f-abb3-446242402cd5" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User001",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "cd02a2b1-b50e-4b85-9b8a-269b54e84ccf", "AQAAAAEAACcQAAAAEPZZPEahoNwltsPr4YzwXiOw6Hb1qom0qIGRvatkcOu7NIQA7NRT0tCYBh5wSHNfQg==", "5b07c482-d899-4276-916a-4be410561a4e" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User002",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "39e2b788-be41-47ae-af8b-5ebd41eafd7b", "AQAAAAEAACcQAAAAEO/MZFWkHU1DU9oKoetk2y1+kgTV1KmagWM9hTiy6ytd3vsl5RLn2jRdNLFykyLBFw==", "31e3f828-a031-41bf-b564-298cf4439153" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User003",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "7ccaf7c1-fb3a-4c0d-89b2-1571f3c2e9cc", "AQAAAAEAACcQAAAAEA1X/gYq10Acy7r9z1B6AIifclfNHq4Zw7Q1VG17qUh/3QnIBI4xZz7ZhI+r1z5PhA==", "4c51f6cf-89b2-4216-ae3a-8485bd57d897" });
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SoftwareManagerAPI.Migrations
{
    public partial class test03 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User001",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "5854d258-1a3a-4211-a4ed-b4fdaa8b20db", "AQAAAAEAACcQAAAAEDK5YukO4LcnLSsyndloh5wTe+nTjXXtWuAh8dsE6iiXJ4sHswwxje04XZoTmvwDSg==", "6f2f37aa-7344-4cf2-afd0-829ecf213fd3" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User002",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "ae213d05-88f7-469e-8ade-3b248d74b463", "AQAAAAEAACcQAAAAEAg9iR0W8a7HxQ3qjQOf5S4IeXkg9o6fVquGgsy4aSXsErwGDJyIOMALwg3O4C738Q==", "b6d40eda-da32-4a6d-a560-9d51783d38e4" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User003",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "f750f21f-90d9-4409-ba3b-6a2ce15f1904", "AQAAAAEAACcQAAAAEPCm/UZGK/uD9lLm9rkZIFadLveuJ3RGBKlqB2mJFZ9TNZH+2+gYESw213hxJUdOdQ==", "007e04a2-79eb-4b97-b378-224d40a6df76" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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
    }
}

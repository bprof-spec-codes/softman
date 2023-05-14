using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SoftwareManagerAPI.Migrations
{
    public partial class teszt2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User001",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "a0e5eb5d-2ca0-4d3a-8c5c-f1d618cceda1", "AQAAAAEAACcQAAAAELoE+TW1aGeyb8Qgs15t7V1pRYw37lWiEzzbGK7SBxDcb8ymIX2CsD/KCo/3in06Sw==", "c989b2cb-960d-48dd-a827-0506bb2f992e" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User002",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "fa60744f-3375-4518-9152-38adaa5a8ea9", "AQAAAAEAACcQAAAAEAWN4yu3ONlqMipaYqATrli5Bycq8YniPLeNWzsuMsPwszEdreNXnTg3AMfdKd235A==", "ca0b1542-05ce-426d-84aa-d20b4d9945e8" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User003",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "2c546ed3-a091-4066-9f2f-72eb58f50667", "AQAAAAEAACcQAAAAELW8ygH3kJXMpSxU+YuNMvw16iTFI057wsXJ5fuZh9OKJnEG6YXatNoI+Ri+X2g7+A==", "0bad8cc5-a422-45ab-9e77-0c79263a27af" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User001",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "cf8ee424-7507-4341-bfe8-074aea09f9d1", "AQAAAAEAACcQAAAAENnQDeIDACNhwCYKSV3VH6hbcYgI09c75DZMZK25IxpZFjgXfAUhoujaqUS22O9hDw==", "70149eb1-3b4b-4c15-8571-03addb9b1ce9" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User002",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "4c09d48c-2858-4e19-9590-1d388a362857", "AQAAAAEAACcQAAAAEPRDJqqGcgYNv4ulNIsBXkemMF/LI4w6UO7suAS+cU8JcgVA8zzD8n7KcCk4wgf2Qg==", "02781690-3aee-4e6f-a964-780bdbd04e01" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User003",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "11ef4ee9-1e75-41bf-9f96-79322f46b93a", "AQAAAAEAACcQAAAAEBN5H9hcaVG4tLp4Cy6SbWIerE8HTYVxYyJxm2vHUppbzLddG4Evk/8NueZ84uJm6A==", "b6645dd5-7be8-4e0d-98ee-9d562467f13e" });
        }
    }
}

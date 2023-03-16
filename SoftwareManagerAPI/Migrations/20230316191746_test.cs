using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SoftwareManagerAPI.Migrations
{
    public partial class test : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "37ac4738-01f5-4591-a6a2-b55a97731651");

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { "User001", 0, "14b62925-a399-4d3d-85d6-338879866f42", "kovi91@gmail.com", true, "Kovács", "András", false, null, "KOVI91@GMAIL.COM", "KOVI91@GMAIL.COM", "AQAAAAEAACcQAAAAEA5IeRj6oM09hf3RpYvWOF+fV2TOxPFvFGgWSMAEJLxlKD4l/2eaNLY4636JCm7U3w==", null, false, "316e2707-e902-4bb7-bf0b-1dbd2180e8f4", false, "kovi91@gmail.com" },
                    { "User002", 0, "f46ffdf8-a042-4cad-a264-6f39a7bdf7d7", "KisPista@gmail.com", true, "Kis", "Pista", false, null, null, "KISPISTA@GMAIL.COM", "AQAAAAEAACcQAAAAEExkGcJTmpe85RGk9wmdnALlnVJVraK66yx9JbF5wm22pCkMwQR2/AgePhijCvc8CA==", null, false, "08c166a8-3a7b-4ce8-8da5-e278fae31301", false, "KisPista@gmail.com" },
                    { "User003", 0, "03a1f751-5139-43ae-9895-1ba6afe0869d", "Jozsi@gmail.com", true, "Nagy", "József", false, null, null, "JOZSI@GMAIL.COM", "AQAAAAEAACcQAAAAEHHiv5daOpKC6RaXaJisvVr0pCSvQ4B7VEEQCr7qB1N4rkGCXmbn+vku3rkGTj0u+g==", null, false, "e56dbf58-b5a1-4cfc-ae4c-6babd03830aa", false, "Jozsi@gmail.com" }
                });

            migrationBuilder.InsertData(
                table: "Classrooms",
                columns: new[] { "Id", "RoomNumber", "StorageCapacity" },
                values: new object[,]
                {
                    { "Class0000", "BA.01.11.", 3000.0 },
                    { "Class0001", "BC.04.07.", 3500.0 },
                    { "Class0002", "BA.11.20.", 1400.0 },
                    { "Class0003", "BA.03.18.", 1000.0 },
                    { "Class0004", "BD.02.11.", 2000.0 }
                });

            migrationBuilder.InsertData(
                table: "Softwares",
                columns: new[] { "Id", "Name", "PictureContentType", "PictureData", "Size", "VersionNumber" },
                values: new object[,]
                {
                    { "Soft0000", "Word", null, null, 1500.0, "2023" },
                    { "Soft0001", "Excel", null, null, 2000.0, "2023" },
                    { "Soft0002", "Visual Studio", null, null, 4500.0, "2022" },
                    { "Soft0003", "Matlab", null, null, 800.0, "2018" },
                    { "Soft0004", "Packet Tracer", null, null, 600.0, "2016" }
                });

            migrationBuilder.InsertData(
                table: "softwareClaims",
                columns: new[] { "Id", "AppUserId", "ClaimDate", "ClassRoomId", "SoftwareId", "Status" },
                values: new object[,]
                {
                    { "SoftwareClaim0000", "User003", new DateTime(2023, 2, 11, 6, 23, 12, 0, DateTimeKind.Unspecified), "Class0001", "Soft0000", 0 },
                    { "SoftwareClaim0001", "User003", new DateTime(2022, 11, 20, 9, 45, 33, 0, DateTimeKind.Unspecified), "Class0001", "Soft0001", 2 },
                    { "SoftwareClaim0002", "User001", new DateTime(2023, 1, 19, 9, 30, 30, 0, DateTimeKind.Unspecified), "Class0002", "Soft0003", 1 },
                    { "SoftwareClaim0003", "User002", new DateTime(2020, 2, 9, 6, 10, 12, 0, DateTimeKind.Unspecified), "Class0001", "Soft0003", 2 },
                    { "SoftwareClaim0004", "User001", new DateTime(2022, 6, 22, 9, 23, 12, 0, DateTimeKind.Unspecified), "Class0003", "Soft0002", 1 },
                    { "SoftwareClaim0005", "User002", new DateTime(2015, 2, 11, 6, 23, 12, 0, DateTimeKind.Unspecified), "Class0002", "Soft0004", 2 }
                });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[] { "1", "User001" });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[] { "2", "User002" });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[] { "2", "User003" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { "1", "User001" });

            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { "2", "User002" });

            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { "2", "User003" });

            migrationBuilder.DeleteData(
                table: "Classrooms",
                keyColumn: "Id",
                keyValue: "Class0000");

            migrationBuilder.DeleteData(
                table: "Classrooms",
                keyColumn: "Id",
                keyValue: "Class0001");

            migrationBuilder.DeleteData(
                table: "Classrooms",
                keyColumn: "Id",
                keyValue: "Class0002");

            migrationBuilder.DeleteData(
                table: "Classrooms",
                keyColumn: "Id",
                keyValue: "Class0003");

            migrationBuilder.DeleteData(
                table: "Classrooms",
                keyColumn: "Id",
                keyValue: "Class0004");

            migrationBuilder.DeleteData(
                table: "Softwares",
                keyColumn: "Id",
                keyValue: "Soft0000");

            migrationBuilder.DeleteData(
                table: "Softwares",
                keyColumn: "Id",
                keyValue: "Soft0001");

            migrationBuilder.DeleteData(
                table: "Softwares",
                keyColumn: "Id",
                keyValue: "Soft0002");

            migrationBuilder.DeleteData(
                table: "Softwares",
                keyColumn: "Id",
                keyValue: "Soft0003");

            migrationBuilder.DeleteData(
                table: "Softwares",
                keyColumn: "Id",
                keyValue: "Soft0004");

            migrationBuilder.DeleteData(
                table: "softwareClaims",
                keyColumn: "Id",
                keyValue: "SoftwareClaim0000");

            migrationBuilder.DeleteData(
                table: "softwareClaims",
                keyColumn: "Id",
                keyValue: "SoftwareClaim0001");

            migrationBuilder.DeleteData(
                table: "softwareClaims",
                keyColumn: "Id",
                keyValue: "SoftwareClaim0002");

            migrationBuilder.DeleteData(
                table: "softwareClaims",
                keyColumn: "Id",
                keyValue: "SoftwareClaim0003");

            migrationBuilder.DeleteData(
                table: "softwareClaims",
                keyColumn: "Id",
                keyValue: "SoftwareClaim0004");

            migrationBuilder.DeleteData(
                table: "softwareClaims",
                keyColumn: "Id",
                keyValue: "SoftwareClaim0005");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User001");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User002");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User003");

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "37ac4738-01f5-4591-a6a2-b55a97731651", 0, "69062b26-146f-4a45-987a-e3b16af7e084", "kovi91@gmail.com", true, "Kovács", "András", false, null, null, "KOVI91@GMAIL.COM", "AQAAAAEAACcQAAAAENhOwMUND0nILES6qV8L/m2aKR1IFx1sIlYi7iMKKFZeQ0XO4k5K+QVbe6ojb8h7qw==", null, false, "81d8c903-abc5-4f17-b938-1a92dd50ca70", false, "kovi91@gmail.com" });
        }
    }
}

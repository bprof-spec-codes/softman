using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SoftwareManagerAPI.Migrations
{
    public partial class init2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "d347c94a-8a1f-4f7e-ae40-73285c6aaca9");

            migrationBuilder.CreateTable(
                name: "Classrooms",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoomNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StorageCapacity = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Classrooms", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "softwareClaims",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    SoftwareId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClassRoomId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AppUserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<int>(type: "int", nullable: false),
                    ClaimDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_softwareClaims", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Softwares",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VersionNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Size = table.Column<double>(type: "float", nullable: false),
                    PictureData = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    PictureContentType = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Softwares", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "37ac4738-01f5-4591-a6a2-b55a97731651", 0, "69062b26-146f-4a45-987a-e3b16af7e084", "kovi91@gmail.com", true, "Kovács", "András", false, null, null, "KOVI91@GMAIL.COM", "AQAAAAEAACcQAAAAENhOwMUND0nILES6qV8L/m2aKR1IFx1sIlYi7iMKKFZeQ0XO4k5K+QVbe6ojb8h7qw==", null, false, "81d8c903-abc5-4f17-b938-1a92dd50ca70", false, "kovi91@gmail.com" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Classrooms");

            migrationBuilder.DropTable(
                name: "softwareClaims");

            migrationBuilder.DropTable(
                name: "Softwares");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "37ac4738-01f5-4591-a6a2-b55a97731651");

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "d347c94a-8a1f-4f7e-ae40-73285c6aaca9", 0, "e2a1eab4-f666-4704-8d35-d227e052e077", "kovi91@gmail.com", true, "Kovács", "András", false, null, null, "KOVI91@GMAIL.COM", "AQAAAAEAACcQAAAAEHeHx2vd42z9PGE5Gulz99RQS928HzJFBnF0GrwUz+g2xvTz2wOD0kPDtkvuvoiQqA==", null, false, "2ab65dc4-a1bf-471c-8cc9-c9fccc75eb22", false, "kovi91@gmail.com" });
        }
    }
}

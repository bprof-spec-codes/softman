using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SoftwareManagerAPI.Migrations
{
    public partial class onDelete : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_softwareClaims_AspNetUsers_AppUserId",
                table: "softwareClaims");

            migrationBuilder.DropForeignKey(
                name: "FK_softwareClaims_Classrooms_ClassRoomId",
                table: "softwareClaims");

            migrationBuilder.DropForeignKey(
                name: "FK_softwareClaims_Softwares_SoftwareId",
                table: "softwareClaims");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User001",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "245b1226-bf89-47cd-b227-cd6a932ce8d6", "AQAAAAEAACcQAAAAENb/H50RFGi1TCexyKtv06GFSsInIRfVOt6IpiIteHxGTvX1rz1iDfcWVpv9Vf15pA==", "b13925c5-8258-4ac5-ac51-f276005190c9" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User002",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "96e8470d-055c-4b4d-90d0-5b4a3c5d7132", "AQAAAAEAACcQAAAAEDOE+bVmodohSItkNqnxL36EdmOfv+NciK6utABDy2ZKya95JgqFgTYCryk0kt4ZTA==", "df50a215-90cb-49c6-988f-4c7af5415f75" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "User003",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "01ebf5bd-3419-4a68-90db-847e5fb9c827", "AQAAAAEAACcQAAAAEERJL+JkQHoDaXPMkMKW/90RFllfz/0m4Q5jXsyaU4Mpss6lQhf2mn9Hrmgp00T/VA==", "c98460c6-f78c-4451-b28f-5d1c07af54d8" });

            migrationBuilder.AddForeignKey(
                name: "FK_softwareClaims_AspNetUsers_AppUserId",
                table: "softwareClaims",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_softwareClaims_Classrooms_ClassRoomId",
                table: "softwareClaims",
                column: "ClassRoomId",
                principalTable: "Classrooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_softwareClaims_Softwares_SoftwareId",
                table: "softwareClaims",
                column: "SoftwareId",
                principalTable: "Softwares",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_softwareClaims_AspNetUsers_AppUserId",
                table: "softwareClaims");

            migrationBuilder.DropForeignKey(
                name: "FK_softwareClaims_Classrooms_ClassRoomId",
                table: "softwareClaims");

            migrationBuilder.DropForeignKey(
                name: "FK_softwareClaims_Softwares_SoftwareId",
                table: "softwareClaims");

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

            migrationBuilder.AddForeignKey(
                name: "FK_softwareClaims_AspNetUsers_AppUserId",
                table: "softwareClaims",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_softwareClaims_Classrooms_ClassRoomId",
                table: "softwareClaims",
                column: "ClassRoomId",
                principalTable: "Classrooms",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_softwareClaims_Softwares_SoftwareId",
                table: "softwareClaims",
                column: "SoftwareId",
                principalTable: "Softwares",
                principalColumn: "Id");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace Pbl4.Domain.Migrations
{
    public partial class remove_Fk_UserRole_Category_StoreRoleUsingEnum : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserRoles_Categories_CategoryId",
                table: "UserRoles");

            migrationBuilder.DropIndex(
                name: "IX_UserRoles_CategoryId",
                table: "UserRoles");

            migrationBuilder.RenameColumn(
                name: "CategoryId",
                table: "UserRoles",
                newName: "RoleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RoleId",
                table: "UserRoles",
                newName: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_UserRoles_CategoryId",
                table: "UserRoles",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserRoles_Categories_CategoryId",
                table: "UserRoles",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

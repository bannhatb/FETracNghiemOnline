using Microsoft.EntityFrameworkCore.Migrations;

namespace Pbl4.Domain.Migrations
{
    public partial class addPassToTestTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Tests",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Password",
                table: "Tests");
        }
    }
}

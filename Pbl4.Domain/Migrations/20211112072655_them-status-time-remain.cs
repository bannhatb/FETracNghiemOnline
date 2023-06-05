using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Pbl4.Domain.Migrations
{
    public partial class themstatustimeremain : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "TestUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "TimeRemain",
                table: "TestUsers",
                type: "datetime",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "TestUsers");

            migrationBuilder.DropColumn(
                name: "TimeRemain",
                table: "TestUsers");
        }
    }
}

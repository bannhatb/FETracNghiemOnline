using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Pbl4.Domain.Migrations
{
    public partial class xoatimeremain : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TimeRemain",
                table: "TestUsers");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "TimeRemain",
                table: "TestUsers",
                type: "datetime",
                nullable: true);
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace Pbl4.Domain.Migrations
{
    public partial class themQuestionCount_RemovePoint_SetAlowNullTo_Explaint : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Mobile",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Point",
                table: "TestQuestions");

            migrationBuilder.DropColumn(
                name: "Point",
                table: "Questions");

            migrationBuilder.AddColumn<int>(
                name: "QuestionCount",
                table: "Tests",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "QuestionContent",
                table: "Questions",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(255)",
                oldMaxLength: 255,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Explaint",
                table: "Questions",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(255)",
                oldMaxLength: 255);

            migrationBuilder.AddColumn<int>(
                name: "QuestionCount",
                table: "Exams",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "QuestionCount",
                table: "Tests");

            migrationBuilder.DropColumn(
                name: "QuestionCount",
                table: "Exams");

            migrationBuilder.AddColumn<string>(
                name: "Mobile",
                table: "Users",
                type: "nvarchar(20)",
                maxLength: 20,
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "Point",
                table: "TestQuestions",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AlterColumn<string>(
                name: "QuestionContent",
                table: "Questions",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(255)",
                oldMaxLength: 255);

            migrationBuilder.AlterColumn<string>(
                name: "Explaint",
                table: "Questions",
                type: "nvarchar(255)",
                maxLength: 255,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(255)",
                oldMaxLength: 255,
                oldNullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "Point",
                table: "Questions",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);
        }
    }
}

using Microsoft.EntityFrameworkCore;
using Pbl4.Domain.Entities;
using Pbl4.Domain.EntityConfigurations;
using Pbl4.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Pbl4.Domain
{
    public class Pbl4Context : DbContext, IUnitOfWork
    {
        public Pbl4Context(DbContextOptions<Pbl4Context> options) : base(options) { }

        public async Task<int> SaveAsync(CancellationToken cancellationToken = default)
        {
            return await SaveChangesAsync(cancellationToken);
        }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Exam> Exams { get; set; }
        public DbSet<ExamCategory> ExamCategories { get; set; }
        public DbSet<Level> Levels { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<QuestionCategory> QuestionCategories { get; set; }
        public DbSet<QuestionExam> QuestionExams { get; set; }
        public DbSet<Test> Tests { get; set; }
        public DbSet<TestQuestion> TestQuestions { get; set; }
        public DbSet<TestQuestionResult> TestQuestionResults { get; set; }
        public DbSet<TestUser> TestUsers { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Class> Classes { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new AnswerEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new CategoryEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new ExamCategoryEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new ExamEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new LevelEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new QuestionCategoryEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new QuestionEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new QuestionExamEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new TestEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new TestQuestionEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new TestQuestionResultEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new TestUserEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new UserEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new UserRoleEntityTypeConfiguration());
            modelBuilder.ApplyConfiguration(new ClassEntityTypeConfiguration());
        }
    }
}

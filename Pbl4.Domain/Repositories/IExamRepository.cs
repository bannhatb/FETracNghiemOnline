using Pbl4.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.Repositories
{
    public interface IExamRepository : IRepository<Exam>
    {
        IQueryable<Exam> Exams { get; }
        void Add(Exam exam);
        void Edit(Exam exam);
        void Delete(Exam exam);

        IQueryable<ExamCategory> ExamCategories { get; }
        void Add(ExamCategory examCategory);
        void Edit(ExamCategory examCategory);
        void Delete(ExamCategory examCategory);
    }
}

using Pbl4.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.Repositories
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly Pbl4Context _context;
        public QuestionRepository(Pbl4Context context)
        {
            _context = context;
        }
        public IQueryable<Question> Questions => _context.Questions;
        public IQueryable<QuestionCategory> QuestionCategories => _context.QuestionCategories;
        public IQueryable<QuestionExam> QuestionExams => _context.QuestionExams;
        public IQueryable<Answer> Answers => _context.Answers;

        public IUnitOfWork UnitOfWork => _context;

        //Question
        public void Add(Question question)
        {
            _context.Questions.Add(question);
        }

        public void Delete(Question question)
        {
            _context.Entry(question).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
        }

        public void Edit(Question question)
        {
            _context.Entry(question).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }

        //QuestionExam
        public void Add(QuestionExam questionExam)
        {
            _context.QuestionExams.Add(questionExam);
        }

        public void Delete(QuestionExam questionExam)
        {
            _context.Entry(questionExam).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
        }

        public void Edit(QuestionExam questionExam)
        {
            _context.Entry(questionExam).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }

        //QuestionCategory
        public void Add(QuestionCategory questionCategory)
        {
            _context.QuestionCategories.Add(questionCategory);
        }

        public void Delete(QuestionCategory questionCategory)
        {
            _context.Entry(questionCategory).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
        }

        public void Edit(QuestionCategory questionCategory)
        {
            _context.Entry(questionCategory).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }

        //Answer
        public void Add(Answer answer)
        {
            _context.Answers.Add(answer);
        }

        public void Delete(Answer answer)
        {
            _context.Entry(answer).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
        }

        public void Edit(Answer answer)
        {
            _context.Entry(answer).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}

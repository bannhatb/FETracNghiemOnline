using Pbl4.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.Repositories
{
    public class Repository<T> : IRepositoryGeneric<T> where T : Entity
    {
        private readonly Pbl4Context _context;

        public Repository(Pbl4Context context)
        {
            _context = context;
        }

        public IUnitOfWork UnitOfWork => _context;

        public IQueryable<T> Entities => _context.Set<T>().AsQueryable();

        public void Add(T entity)
        {
            _context.Set<T>().Add(entity);
        }

        public void Delete(T entity)
        {
            _context.Entry(entity).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
        }

        public void Update(T entity)
        {
            _context.Entry(entity).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        }
    }
}

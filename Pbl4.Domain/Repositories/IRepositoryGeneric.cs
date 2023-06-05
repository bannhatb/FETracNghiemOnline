using Pbl4.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.Repositories
{
    public interface IRepositoryGeneric<T> where T : Entity
    {
        IUnitOfWork UnitOfWork { get; }
        IQueryable<T> Entities { get; }
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}

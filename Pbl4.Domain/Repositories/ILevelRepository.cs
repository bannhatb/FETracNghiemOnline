using Pbl4.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.Repositories
{
    public interface ILevelRepository : IRepository<Level>
    {
        IQueryable<Level> Levels { get; }
        void Add(Level level);
        void Edit(Level level);
        void Delete(Level level);
    }
}

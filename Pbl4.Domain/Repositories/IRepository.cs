using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.Repositories
{
    public interface IRepository<T>
    {
        IUnitOfWork UnitOfWork { get; }
    }
}

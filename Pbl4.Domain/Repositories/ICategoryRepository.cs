﻿using Pbl4.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.Repositories
{
    public interface ICategoryRepository : IRepository<Category>
    {
        IQueryable<Category> Categories { get; }
        void Add(Category category);
        void Edit(Category category);
        void Delete(Category category);
    }
}

﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Pbl4.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.EntityConfigurations
{
    public class ExamCategoryEntityTypeConfiguration : IEntityTypeConfiguration<ExamCategory>
    {
        public void Configure(EntityTypeBuilder<ExamCategory> builder)
        {
            builder.ToTable("ExamCategories");

            // set primary key
            builder.HasKey(o => o.Id);


            // set identity
            builder.Property(x => x.Id)
                .UseIdentityColumn()
                .ValueGeneratedOnAdd();            
        }
    }
}

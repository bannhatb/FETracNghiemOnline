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
    public class QuestionExamEntityTypeConfiguration : IEntityTypeConfiguration<QuestionExam>
    {
        public void Configure(EntityTypeBuilder<QuestionExam> builder)
        {
            builder.ToTable("QuestionExams");

            // set primary key
            builder.HasKey(o => o.Id);


            // set identity
            builder.Property(x => x.Id)
                .UseIdentityColumn()
                .ValueGeneratedOnAdd();

        }
    }
}

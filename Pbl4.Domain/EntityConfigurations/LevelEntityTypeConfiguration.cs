using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Pbl4.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.EntityConfigurations
{
    public class LevelEntityTypeConfiguration : IEntityTypeConfiguration<Level>
    {
        public void Configure(EntityTypeBuilder<Level> builder)
        {
            builder.ToTable("Levels");

            // set primary key
            builder.HasKey(o => o.Id);


            // set identity
            builder.Property(x => x.Id)
                .UseIdentityColumn()
                .ValueGeneratedOnAdd();

            builder
                .Property(e => e.LevelName)
                .HasMaxLength(255);

            

            // set foreign key
            builder.HasMany<Exam>().WithOne().HasForeignKey(x => x.LevelId);
        }
    }
}

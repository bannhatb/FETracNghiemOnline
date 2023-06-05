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
    public class ClassEntityTypeConfiguration : IEntityTypeConfiguration<Class>
    {
        public void Configure(EntityTypeBuilder<Class> builder)
        {
            builder.ToTable("Classes");
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id)
                .UseIdentityColumn()
                .ValueGeneratedOnAdd();

            builder.Property(x => x.Name)
                .HasMaxLength(150);


            //relation
            builder.HasMany<User>()
                .WithOne().HasForeignKey(x => x.ClassId);
        }
    }
}

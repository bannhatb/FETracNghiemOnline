using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pbl4.Domain.Entities
{
    public class UserRole : Entity
    {
        public int UserId { get; set; }
        public int RoleId { get; set; }
    }
}

using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace SoftwareManagerAPI.Models
{
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }

     
        public string LastName { get; set; }

      public virtual ICollection<SoftwareClaim> softwareClaims { get; set; }

        public AppUser()
        {
            softwareClaims = new HashSet<SoftwareClaim>();
           

        }

    }
}

using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SoftwareManagerAPI.Models
{
    public class AppUser : IdentityUser
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [NotMapped]
        public virtual ICollection<SoftwareClaim>? SoftwareClaims { get; set; }
        public AppUser()
        {
            SoftwareClaims = new HashSet<SoftwareClaim>();
        }

    }
}

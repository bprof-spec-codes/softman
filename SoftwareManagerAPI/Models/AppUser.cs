using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SoftwareManagerAPI.Models
{
    public class AppUser : IdentityUser
    {

        [StringLength(200)]
        [Required]
        public string FirstName { get; set; }

        [StringLength(200)]
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

using System.ComponentModel.DataAnnotations;

namespace Software_Manager.Models
{
    public class Software
    {
        [Key]
        public string Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string VersionNumber { get; set; }
        [Required]
        public double Size { get; set; }


        [StringLength(200)]
        public string? ImageFileName { get; set; }

        public virtual ICollection<SoftwareClaim> softwareClaims { get; set; }
        
        public Software()
        {
            softwareClaims = new HashSet<SoftwareClaim>();
            Id = Guid.NewGuid().ToString();

        }
    }
}

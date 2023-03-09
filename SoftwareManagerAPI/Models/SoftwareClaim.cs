using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SoftwareManagerAPI.Models
{

    public enum Status { 
    
        Sent=0,
        Accepted=1,
        Rejected=2

    
    }
    public class SoftwareClaim
    {

        [Key]
        public string Id { get; set; }
        public string? SoftwareId { get; set; }
        public string? ClassRoomId { get; set; }
        public string? AppUserId { get; set; }
        [NotMapped]
        public virtual Software? Software { get; set; }
        [NotMapped]
        public virtual ClassRoom? ClassRoom { get; set; }
        [NotMapped]
        public virtual AppUser? AppUser { get; set; }

        [Required]
        public Status Status { get; set; }

        [Required]
        public DateTime ClaimDate { get; set; }

        public SoftwareClaim()
        {
            Id = Guid.NewGuid().ToString();
        }
    }
}

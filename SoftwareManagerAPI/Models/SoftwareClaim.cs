using System.ComponentModel.DataAnnotations;

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
        [Required]
        public string SoftwareId { get; set; }
        [Required]
        public string ClassRoomId { get; set; }
        [Required]
        public string AppUserId { get; set; }
        [Required]
        public Status Status { get; set; }

        public virtual Software Softwer { get; set; }
        public virtual ClassRoom ClassRoom { get; set; }
        public virtual AppUser AppUser{ get; set; }

        public SoftwareClaim()
        {

            Id = Guid.NewGuid().ToString();

        }
    }
}

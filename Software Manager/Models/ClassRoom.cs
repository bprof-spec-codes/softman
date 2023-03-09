using System.ComponentModel.DataAnnotations;

namespace Software_Manager.Models
{
    public class ClassRoom
    {
        [Key]
        public string Id { get; set; }
        [Required]
        public string RoomNumber { get; set; }
        [Required]
        public double StorageCapacity { get; set; }

        public virtual ICollection<SoftwareClaim> softwareClaims { get; set; }
        public ClassRoom() {
            softwareClaims = new HashSet<SoftwareClaim>();
            Id =Guid.NewGuid().ToString();
        
        }
    }
}

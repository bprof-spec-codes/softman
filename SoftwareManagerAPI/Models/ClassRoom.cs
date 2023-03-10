using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SoftwareManagerAPI.Models
{
    public class ClassRoom
    {
        [Key]
        public string Id { get; set; }
        [Required]
        public string RoomNumber { get; set; }
        [Required]
        public double StorageCapacity { get; set; }
        [NotMapped]
        public virtual ICollection<SoftwareClaim>? SoftwareClaims { get; set; }

        public ClassRoom() {
            SoftwareClaims = new HashSet<SoftwareClaim>();
            Id =Guid.NewGuid().ToString();
        }
    }
}

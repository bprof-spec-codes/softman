using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

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
        [JsonIgnore]
        public virtual ICollection<SoftwareClaim>? SoftwareClaims { get; set; }

        public ClassRoom() {
            SoftwareClaims = new HashSet<SoftwareClaim>();
            Id =Guid.NewGuid().ToString();
        }
    }
}

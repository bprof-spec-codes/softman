using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace SoftwareManagerAPI.Models
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
        [NotMapped]
        [JsonIgnore(Condition =JsonIgnoreCondition.Always)]
        public virtual ICollection<SoftwareClaim>? SoftwareClaims { get; set; }

        //[StringLength(200)]
        //public string? ImageFileName { get; set; }

        public byte[]? PictureData { get; set; }
        public string? PictureContentType { get; set; }

        public Software()
        {
            SoftwareClaims = new HashSet<SoftwareClaim>();
            Id = Guid.NewGuid().ToString();

        }
    }
}

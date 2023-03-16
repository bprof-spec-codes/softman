using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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


        //[StringLength(200)]
        //public string? ImageFileName { get; set; }

        public byte[]? PictureData { get; set; }
        public string? PictureContentType { get; set; }

        public Software()
        {
            Id = Guid.NewGuid().ToString();

        }
    }
}

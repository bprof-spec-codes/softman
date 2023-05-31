using System.ComponentModel.DataAnnotations;

namespace SoftwareManagerAPI.Models.ViewModels
{
    public class SoftwareViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string VersionNumber { get; set; }
        [Required]
        public double Size { get; set; }
        public IFormFile ImageFile { get; set; }
    }
}

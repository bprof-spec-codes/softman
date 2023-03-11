using Microsoft.AspNetCore.Mvc;
using SoftwareManagerAPI.Models;
using System.Diagnostics;

namespace SoftwareManagerAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SoftwareController : ControllerBase
    {
        static List<Software> SoftwaresList = new List<Software>()
        {
            new Software() { Name = "Word", Size = 1500, VersionNumber = "2023", Id = "Soft0000" },
            new Software() { Name = "Excel", Size = 2000, VersionNumber = "2023", Id = "Soft0001" },
            new Software() { Name = "Visual Studio", Size = 4500, VersionNumber = "2022", Id = "Soft0002" },
            new Software() { Name = "Matlab", Size = 800, VersionNumber = "2018", Id = "Soft0003" },
            new Software() { Name = "Packet Tracer", Size = 600, VersionNumber = "2016", Id = "Soft0004" }
        };

        [HttpGet]
        public IEnumerable<Software> GetAll()
        {
            return SoftwaresList;
        }

        [HttpGet("{id}")]
        public Software? GetOne(string id)
        {
            return SoftwaresList.FirstOrDefault(t=>t.Id== id);
        }

        [HttpPost]
        public async void CreateSoftware([FromBody] Software software)
        {
            SoftwaresList.Add(software);
        }

        [HttpDelete("{id}")]
        public async void DeleteSoftware(string id)
        {
            Software softwareToDelete = SoftwaresList.FirstOrDefault(t => t.Id == id);
            SoftwaresList.Remove(softwareToDelete);
        }

        [HttpPut]
        public async void UpdateSoftware([FromBody] Software updatedSoftware)
        {
            Software oldSoftware = SoftwaresList.FirstOrDefault(t=>t.Id==updatedSoftware.Id);
            oldSoftware.Name = updatedSoftware.Name;
            oldSoftware.VersionNumber = updatedSoftware.VersionNumber;
            oldSoftware.Size = updatedSoftware.Size;
            oldSoftware.PictureData = updatedSoftware.PictureData;
            oldSoftware.PictureContentType = updatedSoftware.PictureContentType;
        }

        [HttpGet]
        [Route("[action]")]
        public IEnumerable<Software> SearchSoftwares(string search)
        {
            var results = SoftwaresList.Where(t =>
            t.Name.ToLower().Contains(search.ToLower()) ||
            t.VersionNumber.ToLower().Contains(search.ToLower()));
            return results;
        }
    }
}

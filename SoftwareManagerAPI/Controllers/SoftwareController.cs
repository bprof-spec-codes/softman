using Microsoft.AspNetCore.Mvc;
using SoftwareManagerAPI.Data.Repository;
using SoftwareManagerAPI.Models;
using System.Diagnostics;

namespace SoftwareManagerAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SoftwareController : ControllerBase
    {

        ISoftware SoftwareRepo;

        public SoftwareController(ISoftware SoftwareRepo)
        {

            this.SoftwareRepo = SoftwareRepo;

        }


        [HttpGet]
        public IEnumerable<Software> GetAll()
        {
            return SoftwareRepo.ReadAll();
        }

        [HttpGet("{id}")]
        public Software? GetOne(string id)
        {
            return SoftwareRepo.ReadByID(id);
        }

        [HttpPost]
        public async void CreateSoftware([FromBody] Software software)
        {
            SoftwareRepo.Create(software);
        }

        [HttpDelete("{id}")]
        public async void DeleteSoftware(string id)
        {
            SoftwareRepo.DeleteByID(id);
        }

        [HttpPut]
        public async void UpdateSoftware([FromBody] Software updatedSoftware)
        {
            SoftwareRepo.Update(updatedSoftware);
        }

        [HttpGet]
        [Route("[action]")]
        public IEnumerable<Software> SearchSoftwares(string search)
        {
            return SoftwareRepo.SearchSoftwares(search);
        }
    }
}

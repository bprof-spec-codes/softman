using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using SoftwareManagerAPI.Data.Repository;
using SoftwareManagerAPI.Models;
using System.Diagnostics;

namespace SoftwareManagerAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class SoftwareController : ControllerBase
    {

        ISoftwareRepo SoftwareRepo;

        public SoftwareController(ISoftwareRepo SoftwareRepo)
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
        public async Task<IActionResult> CreateSoftware([FromBody] Software software)
        {
            var createdSoft = SoftwareRepo.Create(software);
            return Ok(createdSoft);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSoftware(string id)
        {
            var deletedSoft = SoftwareRepo.DeleteByID(id);
            return Ok(deletedSoft);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateSoftware([FromBody] Software updatedSoftware)
        {
            var updatedSoft = SoftwareRepo.Update(updatedSoftware);
            return Ok(updatedSoft);
        }

        [HttpGet]
        [Route("[action]")]
        public IEnumerable<Software> SearchSoftwares(string search)
        {
            return SoftwareRepo.SearchSoftwares(search);
        }
    }
}

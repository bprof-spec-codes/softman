using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using SoftwareManagerAPI.Data.Repository;
using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SoftwareClaimController : ControllerBase
    {
        UserManager<AppUser> _userManager;
        ISoftwareClaimRepo SoftwareClaimRepo;

        public SoftwareClaimController(UserManager<AppUser> userManager, ISoftwareClaimRepo softwareClaimRepo)
        {
            _userManager = userManager;
            SoftwareClaimRepo = softwareClaimRepo;
        }

        [HttpGet]
        public IEnumerable<SoftwareClaim> GetAll()
        {
            return SoftwareClaimRepo.ReadAll();
        }

        [HttpGet("{id}")]
        public SoftwareClaim? GetOne(string id)
        {
            return SoftwareClaimRepo.ReadByID(id);
        }

        [HttpGet]
        [Route("[action]")]
        public IEnumerable<SoftwareClaim> SearchSoftwareClaims(string search)
        {
            return SoftwareClaimRepo.SearchSoftwareClaims(search);
        }

        [HttpPost]
        public async Task<IActionResult> CreateSoftwareClaim(SoftwareClassRoomViewModel model)
        {
            var user = await _userManager.GetUserAsync(this.User);
            var appUserId = user.Id;
            var createdSoftClaim = SoftwareClaimRepo.Create(model,appUserId);
            return Ok(createdSoftClaim);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateSoftwareClaim([FromBody] SoftwareClaim updatedSoftwareClaim)
        {
            var updatedSoftClaim = SoftwareClaimRepo.Update(updatedSoftwareClaim);
            return Ok(updatedSoftClaim);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSoftwareClaim(string id)
        {
            var deletedSoftClaim = SoftwareClaimRepo.DeleteByID(id);
            return Ok(deletedSoftClaim);
        }
    }
}

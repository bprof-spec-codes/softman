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
            throw new ArgumentException("Adatbázis kell hozzá, hogy LazyLoadingProxy-t tudjunk használni!"); 
        }

        [HttpPost]
        public async void CreateSoftwareClaim(SoftwareClassRoomViewModel model)
        {
            var user = await _userManager.GetUserAsync(this.User);
            var appUserId = user.Id;
            SoftwareClaimRepo.Create(model,appUserId);
        }

        [HttpPut]
        public async void UpdateSoftwareClaim([FromBody] SoftwareClaim updatedSoftwareClaim)
        {
           SoftwareClaimRepo.Update(updatedSoftwareClaim);
        }

        [HttpDelete("{id}")]
        public async void DeleteSoftwareClaim(string id)
        {
            SoftwareClaimRepo.DeleteByID(id);
        }
    }
}

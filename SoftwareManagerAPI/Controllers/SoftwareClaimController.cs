using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using SoftwareManagerAPI.Data.Repository;
using SoftwareManagerAPI.Models;
using SoftwareManagerAPI.Models.ViewModels;

namespace SoftwareManagerAPI.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class SoftwareClaimController : ControllerBase
    {
        UserManager<AppUser> _userManager;
        IClassRoomRepo ClassRoomRepo;
        ISoftwareClaimRepo SoftwareClaimRepo;

        public SoftwareClaimController(UserManager<AppUser> userManager, ISoftwareClaimRepo softwareClaimRepo, IClassRoomRepo classRoomRepo)
        {
            _userManager = userManager;
            SoftwareClaimRepo = softwareClaimRepo;
            this.ClassRoomRepo = classRoomRepo;
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


        // -----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----| 
        /*
            Az userManager nem talál usert és emiatt a szerver meghal.
            A problémát egy kérdőjellel megkerültem, de így null értéket párosít a SoftwareClaim AppUser tulajdonságához, ami nem jó.
         */
        // -----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----| 
        [HttpPost]
        public async Task<IActionResult> CreateSoftwareClaim(SoftwareClassRoomViewModel model)
        {
            var user = _userManager.Users
                .FirstOrDefault(t => t.UserName == this.User.Identity.Name);

            //var user = await _userManager.GetUserAsync(this.User);

            // var appUserId = user.Id;
            var appUserId = user?.Id;
            var createdSoftClaim = SoftwareClaimRepo.Create(model,appUserId);
            return Ok(createdSoftClaim);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateSoftwareClaim([FromBody] SoftwareClaim updatedSoftwareClaim)
        {
            var updatedSoftClaim = SoftwareClaimRepo.Update(updatedSoftwareClaim);
            if ((int)updatedSoftClaim.Status== 1)
            {
                ClassRoom Updated= new ClassRoom();
                Updated.Id=updatedSoftClaim.ClassRoom.Id;
                Updated.RoomNumber = updatedSoftClaim.ClassRoom.RoomNumber;
                Updated.StorageCapacity = updatedSoftClaim.ClassRoom.StorageCapacity -= Math.Round(updatedSoftClaim.Software.Size / 1024, 2);
                if (Updated.StorageCapacity>=0)
                {
                    ClassRoomRepo.Update(Updated);
                }

                
            }
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

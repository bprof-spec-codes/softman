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


        ISoftwareClaim SoftwareClaimRepo;

        public SoftwareClaimController(ISoftwareClaim SoftwareClaim)
        {

            this.SoftwareClaimRepo = SoftwareClaim;

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
        {/*
            Random rnd = new Random(); //teszt ideéig van benne, aztán töröljük
            int rndNumber = rnd.Next(0,AppUsers.Count()); //teszt ideéig van benne, aztán töröljük

            SoftwareClaim softwareClaim = new SoftwareClaim();
            softwareClaim.Status= Status.Sent;
            softwareClaim.ClaimDate = DateTime.Now;
            softwareClaim.SoftwareId = model.Software.Id;
            softwareClaim.ClassRoomId = model.ClassRoom.Id;
            softwareClaim.AppUserId = AppUsers[rndNumber].Id; //ez a teszt kedvéért egy random érték, adatbázis és authorizáció esetén ki lesz cserélve

            SoftwareClaims.Add(softwareClaim);
            */
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

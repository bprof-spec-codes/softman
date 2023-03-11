using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SoftwareClaimController : ControllerBase
    {
        static List<AppUser> AppUsers = new List<AppUser>()
        {
            new AppUser(){Id="User000", Email="bela@bela.hu", NormalizedEmail="BELA@BELA.HU",
                UserName="bela@bela.hu",NormalizedUserName="BELA@BELA.HU",FirstName="Nagy", LastName="Bela"},
            new AppUser(){Id="User001", Email="kati@kati.hu", NormalizedEmail="KATI@KATI.HU",
                UserName="kati@kati.hu",NormalizedUserName="KATI@KATI.HU",FirstName="Kiss", LastName="Kati"},
            new AppUser(){Id="User002", Email="sanyi@sanyi.hu", NormalizedEmail="SANYI@SANYI.HU",
                UserName="sanyi@sanyi.hu",NormalizedUserName="SANYI@SANYI.HU",FirstName="Poczos", LastName="Sanyi"},
            new AppUser(){Id="User003", Email="levi@levi.hu", NormalizedEmail="LEVI@LEVI.HU",
                UserName="levi@levi.hu",NormalizedUserName="LEVI@LEVI.HU",FirstName="Torak", LastName="Levi"}
        };
        static List<SoftwareClaim> SoftwareClaims = new List<SoftwareClaim>()
        {
            new SoftwareClaim(){Id="SoftwareClaim0000",ClaimDate=new DateTime(2023,2,11,6,23,12),
                Status=Status.Sent, SoftwareId="Soft0000",ClassRoomId="Class0001", AppUserId="User003"},
            new SoftwareClaim(){Id="SoftwareClaim0001",ClaimDate=new DateTime(2022,11,20,9,45,33),
                Status=Status.Rejected, SoftwareId="Soft0001",ClassRoomId="Class0001", AppUserId="User003"},
            new SoftwareClaim(){Id="SoftwareClaim0002",ClaimDate=new DateTime(2023,1,19,9,30,30),
                Status=Status.Accepted, SoftwareId="Soft0003",ClassRoomId="Class0002", AppUserId="User001"},
            new SoftwareClaim(){Id="SoftwareClaim0003",ClaimDate=new DateTime(2020,2,9,6,10,12),
                Status=Status.Rejected, SoftwareId="Soft0003",ClassRoomId="Class0001", AppUserId="User002"},
            new SoftwareClaim(){Id="SoftwareClaim0004",ClaimDate=new DateTime(2022,6,22,9,23,12),
                Status=Status.Accepted, SoftwareId="Soft0002",ClassRoomId="Class0003", AppUserId="User000"},
            new SoftwareClaim(){Id="SoftwareClaim0005",ClaimDate=new DateTime(2015,2,11,6,23,12),
                Status=Status.Rejected, SoftwareId="Soft0004",ClassRoomId="Class0002", AppUserId="User000"}
        };

        [HttpGet]
        public IEnumerable<SoftwareClaim> GetAll()
        {
            return SoftwareClaims;
        }

        [HttpGet("{id}")]
        public SoftwareClaim? GetOne(string id)
        {
            return SoftwareClaims.FirstOrDefault(t => t.Id == id);
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
            Random rnd = new Random(); //teszt ideéig van benne, aztán töröljük
            int rndNumber = rnd.Next(0,AppUsers.Count()); //teszt ideéig van benne, aztán töröljük

            SoftwareClaim softwareClaim = new SoftwareClaim();
            softwareClaim.Status= Status.Sent;
            softwareClaim.ClaimDate = DateTime.Now;
            softwareClaim.SoftwareId = model.Software.Id;
            softwareClaim.ClassRoomId = model.ClassRoom.Id;
            softwareClaim.AppUserId = AppUsers[rndNumber].Id; //ez a teszt kedvéért egy random érték, adatbázis és authorizáció esetén ki lesz cserélve

            SoftwareClaims.Add(softwareClaim);
        }

        [HttpPut]
        public async void UpdateSoftwareClaim([FromBody] SoftwareClaim updatedSoftwareClaim)
        {
            SoftwareClaim oldSoftwareClaim = SoftwareClaims.FirstOrDefault(t=>t.Id== updatedSoftwareClaim.Id);
            oldSoftwareClaim.AppUserId=updatedSoftwareClaim.AppUserId;
            oldSoftwareClaim.ClassRoomId = updatedSoftwareClaim.ClassRoomId;
            oldSoftwareClaim.SoftwareId = updatedSoftwareClaim.SoftwareId;
            oldSoftwareClaim.ClaimDate = updatedSoftwareClaim.ClaimDate;
            oldSoftwareClaim.Status = updatedSoftwareClaim.Status;
        }

        [HttpDelete("{id}")]
        public async void DeleteSoftwareClaim(string id)
        {
            SoftwareClaim softwareClaimToDelete = SoftwareClaims.FirstOrDefault(t=>t.Id== id);
            SoftwareClaims.Remove(softwareClaimToDelete);
        }
    }
}

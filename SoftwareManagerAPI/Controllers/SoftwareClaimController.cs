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
    }
}

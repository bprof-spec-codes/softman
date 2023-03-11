using Microsoft.AspNetCore.Mvc;
using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClassController : ControllerBase
    {
        static List<ClassRoom> ClassRooms = new List<ClassRoom>()
        {
            new ClassRoom(){Id="Class0000",RoomNumber="BA.01.11.",StorageCapacity=3000},
            new ClassRoom(){Id="Class0001",RoomNumber="BC.04.07.",StorageCapacity=3500},
            new ClassRoom(){Id="Class0002",RoomNumber="BA.11.20.",StorageCapacity=1400},
            new ClassRoom(){Id="Class0003",RoomNumber="BA.03.18.",StorageCapacity=1000},
            new ClassRoom(){Id="Class0004",RoomNumber="BD.02.11.",StorageCapacity=2000}
        };
    }
}

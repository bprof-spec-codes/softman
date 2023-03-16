using Microsoft.AspNetCore.Mvc;
using SoftwareManagerAPI.Data.Logic;
using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClassController : ControllerBase
    {
        IClassRoom ClassRoomRepo;

        public ClassController(IClassRoom ClassRoomRepo) { 
        
        this.ClassRoomRepo = ClassRoomRepo;
        
        }
        
        
        static List<ClassRoom> ClassRooms = new List<ClassRoom>()
        {
            new ClassRoom(){Id="Class0000",RoomNumber="BA.01.11.",StorageCapacity=3000},
            new ClassRoom(){Id="Class0001",RoomNumber="BC.04.07.",StorageCapacity=3500},
            new ClassRoom(){Id="Class0002",RoomNumber="BA.11.20.",StorageCapacity=1400},
            new ClassRoom(){Id="Class0003",RoomNumber="BA.03.18.",StorageCapacity=1000},
            new ClassRoom(){Id="Class0004",RoomNumber="BD.02.11.",StorageCapacity=2000}
        };

        [HttpGet]
        public IEnumerable<ClassRoom> GetAll()
        {
            return ClassRoomRepo.ReadAll();
        }

        [HttpGet("{id}")]
        public ClassRoom? GetOne(string id)
        {
            return ClassRooms.FirstOrDefault(t=>t.Id== id);
        }

        [HttpGet]
        [Route("[action]")]
        public IEnumerable<ClassRoom> SearchClasses (string search)
        {
            var results = ClassRooms.Where(t =>
            t.RoomNumber.ToLower().Contains(search.ToLower()));
            return results;
        }
        
        [HttpPost]
        public async void CreateClass([FromBody] ClassRoom classRoom)
        {
            ClassRooms.Add(classRoom);
        }

        [HttpPut]
        public async void UpdateClass([FromBody] ClassRoom updatedClassRoom)
        {
            ClassRoom oldClassRoom = ClassRooms.FirstOrDefault(t => t.Id == updatedClassRoom.Id);
            oldClassRoom.RoomNumber= updatedClassRoom.RoomNumber;
            oldClassRoom.StorageCapacity= updatedClassRoom.StorageCapacity;
        }

        [HttpDelete("{id}")]
        public async void DeleteClass(string id)
        {
            ClassRoom classRoomToDelete = ClassRooms.FirstOrDefault(t => t.Id == id);
            ClassRooms.Remove(classRoomToDelete);
        }
    }
}

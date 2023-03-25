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
        
        
        [HttpGet]
        public IEnumerable<ClassRoom> GetAll()
        {
            return ClassRoomRepo.ReadAll();
        }

        [HttpGet("{id}")]
        public ClassRoom? GetOne(string id)
        {
            
            return ClassRoomRepo.ReadByID(id);
        }

        [HttpGet]
        [Route("[action]")]
        public IEnumerable<ClassRoom> SearchClasses (string search)
        {
           return ClassRoomRepo.SearchClasses(search);
        }
        
        [HttpPost]
        public async void CreateClass([FromBody] ClassRoom classRoom)
        {
            ClassRoomRepo.Create(classRoom);
        }

        [HttpPut]
        public async void UpdateClass([FromBody] ClassRoom updatedClassRoom)
        {
           ClassRoomRepo.Update(updatedClassRoom);
        }

        [HttpDelete("{id}")]
        public async void DeleteClass(string id)
        {
            ClassRoomRepo.DeleteByID(id);
        }
    }
}

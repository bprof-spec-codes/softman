using Microsoft.AspNetCore.Mvc;
using SoftwareManagerAPI.Data.Repository;
using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClassController : ControllerBase
    {
        IClassRoomRepo ClassRoomRepo;

        public ClassController(IClassRoomRepo ClassRoomRepo) { 
        
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
        public async Task<IActionResult> CreateClass([FromBody] ClassRoom classRoom)
        {
            var craetedClass = ClassRoomRepo.Create(classRoom);
            return Ok(craetedClass);
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

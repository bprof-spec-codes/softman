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
        public async Task<IActionResult> UpdateClass([FromBody] ClassRoom updatedClassRoom)
        {
            var updatedClass = ClassRoomRepo.Update(updatedClassRoom);
            return Ok(updatedClass);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClass(string id)
        {
            var deletedClass = ClassRoomRepo.DeleteByID(id);
            return Ok(deletedClass);
        }
    }
}

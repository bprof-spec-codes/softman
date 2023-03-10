using Microsoft.AspNetCore.Mvc;
using SoftwareManagerAPI.Models;
using System.Diagnostics;

namespace SoftwareManagerAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SoftwareController : ControllerBase
    {
        List<Software> SoftwaresList;
        public SoftwareController()
        {
            SoftwaresList = new List<Software>();
            SoftwaresList.Add(new Software() { Name = "Word", Size = 1500, VersionNumber = "2023", Id = "Soft0000" });
        }
    }
}

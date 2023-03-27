using SoftwareManagerAPI.Data.Repository;
using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Logic
{
    public class SoftwareLogic
    {
        ISoftwareRepo softwareRepo;

        public SoftwareLogic(ISoftwareRepo softwareRepo)
        {
            this.softwareRepo = softwareRepo;
        }



        //--------------------CRUD---------------------
        public IEnumerable<Software> ReadAll()
        {
            return softwareRepo.ReadAll();
        }

        public Software ReadById(string id)
        {
            return softwareRepo.ReadByID(id);
        }

        public void CreateSoftware(Software software)
        {
            softwareRepo.Create(software);
        }

        public void UpdateSoftware(Software software)
        {
            softwareRepo.Update(software);
        }

        public void DeleteSoftware(string id)
        {
            softwareRepo.DeleteByID(id);
        }
    }
}

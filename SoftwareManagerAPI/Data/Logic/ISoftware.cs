using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Logic
{
    public interface ISoftware 
    {
        void Create(Software Software);

        public void DeleteByID(string id);

        IEnumerable<Software> ReadAll();

        Software ReadByID(string id);
        void Update(Software uptodate);


    }
}

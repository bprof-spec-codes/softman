using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Logic
{
    public interface ISoftwareClaim 
    {
        void Create(SoftwareClaim SoftwareClaim);

        public void DeleteByID(string id);

        IEnumerable<SoftwareClaim> ReadAll();

        SoftwareClaim ReadByID(string id);
        void Update(SoftwareClaim uptodate);



    }
}

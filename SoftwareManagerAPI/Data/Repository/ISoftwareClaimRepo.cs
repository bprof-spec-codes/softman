using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Repository
{
    public interface ISoftwareClaimRepo
    {
        void Create(SoftwareClaim Software);
        void DeleteByID(string id);
        IEnumerable<SoftwareClaim> ReadAll();
        SoftwareClaim ReadByID(string id);
        void Update(SoftwareClaim uptodate);
    }
}
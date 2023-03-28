using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Repository
{
    public interface ISoftwareClaimRepo
    {
        SoftwareClaim Create(SoftwareClassRoomViewModel softClassViewModel, string appUserId);
        SoftwareClaim DeleteByID(string id);
        IEnumerable<SoftwareClaim> ReadAll();
        SoftwareClaim ReadByID(string id);
        IEnumerable<SoftwareClaim> SearchSoftwareClaims(string search);
        void Update(SoftwareClaim uptodate);
    }
}
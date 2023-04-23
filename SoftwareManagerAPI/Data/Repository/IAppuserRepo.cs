using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Repository
{
    public interface IAppuserRepo
    {
        void Create(AppUser Appuser);
        void DeleteByID(string id);
        IEnumerable<AppUser> ReadAll();
        AppUser ReadByID(string id);
        void Update(AppUser uptodate);
    }
}
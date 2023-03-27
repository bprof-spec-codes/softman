using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Repository
{
    public interface IAppuser
    {
        void Create(AppUser AppUser);

        public void DeleteByID(string id);

        IEnumerable<AppUser> ReadAll();

        AppUser ReadByID(string id);
        void Update(AppUser uptodate);


    }
}

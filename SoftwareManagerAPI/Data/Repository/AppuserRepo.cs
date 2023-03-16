using SoftwareManagerAPI.Data.Logic;
using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Repository
{
    public class AppuserRepo : IAppuser
    {

        ApiDbContext db;
        public AppuserRepo(ApiDbContext db)
        {
            this.db = db;
        }

        public void Create(AppUser Appuser)
        {
            db.AppUsers.Add(Appuser);
            db.SaveChanges();
        }

        public void DeleteByID(string id)
        {
            var AppUser = ReadByID(id);
            db.AppUsers.Remove(AppUser);
            db.SaveChanges();
        }

        public IEnumerable<AppUser> ReadAll()
        {
            return db.AppUsers;
        }

        public AppUser ReadByID(string id)
        {
            return db.AppUsers.FirstOrDefault(t => t.Id == id);
        }

        public void Update(AppUser uptodate)
        {
            DeleteByID(uptodate.Id);
            db.AppUsers.Add(uptodate);
            db.SaveChanges();
        }
    }
}

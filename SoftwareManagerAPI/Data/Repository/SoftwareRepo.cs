using SoftwareManagerAPI.Data.Logic;
using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Repository
{
    public class SoftwareRepo : ISoftware
    {


        ApiDbContext db;
        public SoftwareRepo(ApiDbContext db)
        {
            this.db = db;
        }
        public void Create(Software Software)
        {
            db.Softwares.Add(Software);
            db.SaveChanges();
        }

        public void DeleteByID(string id)
        {
            var Software = ReadByID(id);
            db.Softwares.Remove(Software);
            db.SaveChanges();
        }

        public IEnumerable<Software> ReadAll()
        {
            return db.Softwares;
        }

        public Software ReadByID(string id)
        {
            return db.Softwares.FirstOrDefault(t => t.Id == id);
        }

        public void Update(Software uptodate)
        {
            DeleteByID(uptodate.Id);
            db.Softwares.Add(uptodate);
            db.SaveChanges();
        }
    }
}

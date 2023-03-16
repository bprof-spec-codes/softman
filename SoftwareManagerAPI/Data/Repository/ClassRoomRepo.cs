using SoftwareManagerAPI.Data.Logic;
using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Repository
{
    public class ClassRoomRepo : IClassRoom
    {

        ApiDbContext db;
        public ClassRoomRepo(ApiDbContext db)
        {
            this.db = db;
        }
        public void Create(ClassRoom ClassRoom)
        {
            db.Classrooms.Add(ClassRoom);
            db.SaveChanges();
        }

        public void DeleteByID(string id)
        {
            var ClassRoom = ReadByID(id);
            db.Classrooms.Remove(ClassRoom);
            db.SaveChanges();
        }

        public IEnumerable<ClassRoom> ReadAll()
        {
            return db.Classrooms;
        }

        public ClassRoom ReadByID(string id)
        {
            return db.Classrooms.FirstOrDefault(t => t.Id == id);
        }

        public void Update(ClassRoom uptodate)
        {
            DeleteByID(uptodate.Id);
            db.Classrooms.Add(uptodate);
            db.SaveChanges();
        }
    }
}

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

        public IEnumerable<ClassRoom> SearchClasses(string search)
        {
            return db.Classrooms.Where(t =>t.RoomNumber.ToLower().Contains(search.ToLower()));

        }

        public void Update(ClassRoom uptodate)
        {
            var oldClassRoom = ReadByID(uptodate.Id);
            oldClassRoom.RoomNumber = uptodate.RoomNumber;
            oldClassRoom.StorageCapacity = uptodate.StorageCapacity;
            db.SaveChanges();
        }
    }
}

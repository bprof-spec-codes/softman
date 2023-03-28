using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Repository
{
    public class ClassRoomRepo : IClassRoomRepo
    {

        ApiDbContext db;
        public ClassRoomRepo(ApiDbContext db)
        {
            this.db = db;
        }
        public ClassRoom Create(ClassRoom ClassRoom)
        {
            ClassRoom.Id = Guid.NewGuid().ToString();
            db.Classrooms.Add(ClassRoom);
            db.SaveChanges();
            return ClassRoom;
        }

        public ClassRoom DeleteByID(string id)
        {
            var ClassRoom = ReadByID(id);

            var classRoomCopy = new ClassRoom()
            {
                Id = ClassRoom.Id,
                RoomNumber = ClassRoom.RoomNumber,
                StorageCapacity = ClassRoom.StorageCapacity
            };

            db.Classrooms.Remove(ClassRoom);
            db.SaveChanges();
            return classRoomCopy;
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
            return db.Classrooms.Where(t => t.RoomNumber.ToLower().Contains(search.ToLower()));

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

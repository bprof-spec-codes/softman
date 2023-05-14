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
            var sameClass = ReadAll().FirstOrDefault(t=>
            t.RoomNumber.ToLower() == ClassRoom.RoomNumber.ToLower() &&
            t.StorageCapacity == ClassRoom.StorageCapacity);

            ;

            if(sameClass == null)
            {
                ClassRoom.Id = Guid.NewGuid().ToString();
                db.Classrooms.Add(ClassRoom);
                db.SaveChanges();
                return ClassRoom;
            }
            throw new ArgumentException("There is already a class with these parameters...");
            
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
            throw new ArgumentException("The class with this Id does not exists...");
            
        }

        public IEnumerable<ClassRoom> ReadAll()
        {
            return db.Classrooms;
        }

        public ClassRoom ReadByID(string id)
        {
            var classRoom = db.Classrooms.FirstOrDefault(t => t.Id == id);
            if(classRoom!=null)
            {
                return classRoom;
            }
            throw new ArgumentException("The class with this Id does not exists...");
        }

        public IEnumerable<ClassRoom> SearchClasses(string search)
        {
            return db.Classrooms.Where(t =>
            t.RoomNumber.ToLower().Contains(search.ToLower()) ||
            t.StorageCapacity.ToString().Contains(search.ToLower()));

        }

        public ClassRoom Update(ClassRoom uptodate)
        {
            foreach (var item in ReadAll())
            {
                if (uptodate.RoomNumber==item.RoomNumber&&uptodate.Id!=item.Id)
                {
                    throw new Exception("This class is already exists...");
                }
            }
                var oldClassRoom = ReadByID(uptodate.Id);
                oldClassRoom.RoomNumber = uptodate.RoomNumber;
                oldClassRoom.StorageCapacity = uptodate.StorageCapacity;
                db.SaveChanges();
                return oldClassRoom;
         

        }
    }
}

using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Repository
{
    public interface IClassRoomRepo
    {
        ClassRoom Create(ClassRoom ClassRoom);
        void DeleteByID(string id);
        IEnumerable<ClassRoom> ReadAll();
        ClassRoom ReadByID(string id);
        IEnumerable<ClassRoom> SearchClasses(string search);
        void Update(ClassRoom uptodate);
    }
}
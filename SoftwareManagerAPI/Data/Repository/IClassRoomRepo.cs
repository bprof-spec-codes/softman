using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Repository
{
    public interface IClassRoomRepo
    {
        ClassRoom Create(ClassRoom ClassRoom);
        ClassRoom DeleteByID(string id);
        IEnumerable<ClassRoom> ReadAll();
        ClassRoom ReadByID(string id);
        IEnumerable<ClassRoom> SearchClasses(string search);
        ClassRoom Update(ClassRoom uptodate);
    }
}
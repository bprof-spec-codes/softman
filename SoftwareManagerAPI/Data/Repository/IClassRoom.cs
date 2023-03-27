using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Repository
{
    public interface IClassRoom
    {
        void Create(ClassRoom ClassRoom);

        public void DeleteByID(string id);

        IEnumerable<ClassRoom> ReadAll();
        public IEnumerable<ClassRoom> SearchClasses(string search);

        ClassRoom ReadByID(string id);
        void Update(ClassRoom uptodate);


    }
}

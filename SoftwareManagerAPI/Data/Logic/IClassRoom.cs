using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Logic
{
    public interface IClassRoom
    {
        void Create(ClassRoom ClassRoom);

        public void DeleteByID(string id);

        IEnumerable<ClassRoom> ReadAll();

        ClassRoom ReadByID(string id);
        void Update(ClassRoom uptodate);


    }
}

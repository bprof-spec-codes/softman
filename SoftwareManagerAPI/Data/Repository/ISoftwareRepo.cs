using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Repository
{
    public interface ISoftwareRepo
    {
        void Create(Software Software);
        void DeleteByID(string id);
        IEnumerable<Software> ReadAll();
        Software ReadByID(string id);
        IEnumerable<Software> SearchSoftwares(string search);
        void Update(Software uptodate);
    }
}
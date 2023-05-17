using SoftwareManagerAPI.Models;
using SoftwareManagerAPI.Models.ViewModels;

namespace SoftwareManagerAPI.Data.Repository
{
    public interface ISoftwareRepo
    {
        Software Create(Software Software);
        Software CreateSoftware(SoftwareViewModel Software);
        Software DeleteByID(string id);
        IEnumerable<Software> ReadAll();
        Software ReadByID(string id);
        IEnumerable<Software> SearchSoftwares(string search);
        Software Update(Software uptodate);
    }
}
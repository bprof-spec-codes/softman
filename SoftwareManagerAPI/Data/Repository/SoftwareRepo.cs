using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Repository
{
    public class SoftwareRepo : ISoftwareRepo
    {


        ApiDbContext db;
        public SoftwareRepo(ApiDbContext db)
        {
            this.db = db;
        }
        public Software Create(Software Software)
        {
            var sameSoftware = ReadAll().FirstOrDefault(t=>
            t.Name.ToLower() == Software.Name.ToLower() &&
            t.VersionNumber.ToLower() == Software.VersionNumber.ToLower() &&
            t.Size == Software.Size);

            if(sameSoftware == null)
            {
                Software.Id = Guid.NewGuid().ToString();
                db.Softwares.Add(Software);
                db.SaveChanges();
                return Software;
            }
            throw new ArgumentException("There is already a software with these patameters...");
            
        }

        public Software DeleteByID(string id)
        {
            var Software = ReadByID(id);

            var softCopy = new Software()
            {
                Id = id,
                Name = Software.Name,
                PictureContentType = Software.PictureContentType,
                PictureData = Software.PictureData,
                Size = Software.Size,
                VersionNumber = Software.VersionNumber
            };

            db.Softwares.Remove(Software);
            db.SaveChanges();
            return softCopy;
        }

        public IEnumerable<Software> ReadAll()
        {
            return db.Softwares;
        }

        public Software ReadByID(string id)
        {
            var soft = db.Softwares.FirstOrDefault(t => t.Id == id);
            if(soft!=null)
            {
                return soft;
            }
            throw new ArgumentException("The software with this Id does not exists...");
        }

        public IEnumerable<Software> SearchSoftwares(string search)
        {
            return db.Softwares.Where(t =>
             t.Name.ToLower().Contains(search.ToLower()) ||
             t.VersionNumber.ToLower().Contains(search.ToLower()) ||
             t.Size.ToString().Contains(search.ToLower()));
        }

        public Software Update(Software uptodate)
        {
            var sameSoftware = ReadAll().FirstOrDefault(t =>
            t.Name.ToLower() == uptodate.Name.ToLower() &&
            t.VersionNumber.ToLower() == uptodate.VersionNumber.ToLower() &&
            t.Size == uptodate.Size);

            if(sameSoftware == null)
            {
                var oldSoftware = ReadByID(uptodate.Id);
                oldSoftware.Name = uptodate.Name;
                oldSoftware.VersionNumber = uptodate.VersionNumber;
                oldSoftware.Size = uptodate.Size;
                oldSoftware.PictureData = uptodate.PictureData;
                oldSoftware.PictureContentType = uptodate.PictureContentType;
                db.SaveChanges();

                return oldSoftware;
            }
            throw new ArgumentException("There is already a software with these parameters...");
        }
    }
}

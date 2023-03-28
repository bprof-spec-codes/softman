﻿using SoftwareManagerAPI.Models;

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
            Software.Id = Guid.NewGuid().ToString();
            db.Softwares.Add(Software);
            db.SaveChanges();
            return Software;
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
            return db.Softwares.FirstOrDefault(t => t.Id == id);
        }

        public IEnumerable<Software> SearchSoftwares(string search)
        {
            return db.Softwares.Where(t =>
             t.Name.ToLower().Contains(search.ToLower()) ||
             t.VersionNumber.ToLower().Contains(search.ToLower()));

        }

        public void Update(Software uptodate)
        {
            var oldSoftware = ReadByID(uptodate.Id);
            oldSoftware.Name = uptodate.Name;
            oldSoftware.VersionNumber = uptodate.VersionNumber;
            oldSoftware.Size = uptodate.Size;
            oldSoftware.PictureData = uptodate.PictureData;
            oldSoftware.PictureContentType = uptodate.PictureContentType;
            db.SaveChanges();
        }
    }
}

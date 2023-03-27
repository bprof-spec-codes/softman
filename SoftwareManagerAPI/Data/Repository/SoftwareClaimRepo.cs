using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Repository
{
    public class SoftwareClaimRepo : ISoftwareClaim
    {

        ApiDbContext db;
        public SoftwareClaimRepo(ApiDbContext db)
        {
            this.db = db;
        }
        public void Create(SoftwareClaim Software)
        {
            db.softwareClaims.Add(Software);
            db.SaveChanges();
        }

        public void DeleteByID(string id)
        {
            var SoftwareClaim = ReadByID(id);
            db.softwareClaims.Remove(SoftwareClaim);
            db.SaveChanges();
        }

        public IEnumerable<SoftwareClaim> ReadAll()
        {
            return db.softwareClaims;
        }

        public SoftwareClaim ReadByID(string id)
        {
            return db.softwareClaims.FirstOrDefault(t => t.Id == id);
        }

        public void Update(SoftwareClaim uptodate)
        {
            var oldSoftwareClaim = ReadByID(uptodate.Id);
            oldSoftwareClaim.AppUserId= uptodate.AppUserId;
            oldSoftwareClaim.ClassRoomId= uptodate.ClassRoomId;
            oldSoftwareClaim.SoftwareId = uptodate.SoftwareId;
            oldSoftwareClaim.ClaimDate= uptodate.ClaimDate;
            oldSoftwareClaim.Status= uptodate.Status;
            db.SaveChanges();
        }
    }
}

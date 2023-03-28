using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Repository
{
    public class SoftwareClaimRepo : ISoftwareClaimRepo
    {

        ApiDbContext db;
        public SoftwareClaimRepo(ApiDbContext db)
        {
            this.db = db;
        }
        public SoftwareClaim Create(SoftwareClassRoomViewModel softClassViewModel, string appUserId)
        {
            var classRoom = softClassViewModel.ClassRoom;
            var soft = softClassViewModel.Software;

            SoftwareClaim softwareClaim = new SoftwareClaim();
            softwareClaim.SoftwareId = soft.Id;
            softwareClaim.ClassRoomId = classRoom.Id;
            softwareClaim.AppUserId = appUserId;

            db.softwareClaims.Add(softwareClaim);
            db.SaveChanges();
            return softwareClaim;
        }

        public SoftwareClaim DeleteByID(string id)
        {
            var SoftwareClaim = ReadByID(id);

            var softClaimCopy = new SoftwareClaim()
            {
                SoftwareId = SoftwareClaim.Id,
                AppUserId= SoftwareClaim.AppUserId,
                ClaimDate = SoftwareClaim.ClaimDate,
                ClassRoomId= SoftwareClaim.ClassRoomId,
                Id = SoftwareClaim.Id,
                Status= SoftwareClaim.Status
            };

            db.softwareClaims.Remove(SoftwareClaim);
            db.SaveChanges();
            return softClaimCopy;
        }

        public IEnumerable<SoftwareClaim> ReadAll()
        {
            return db.softwareClaims;
        }

        public SoftwareClaim ReadByID(string id)
        {
            return db.softwareClaims.FirstOrDefault(t => t.Id == id);
        }

        public IEnumerable<SoftwareClaim> SearchSoftwareClaims(string search)
        {
            var result = ReadAll().Where(t =>
            t.ClaimDate.ToString().ToLower() == search.ToLower() ||
            t.Status.ToString().ToLower() == search.ToLower() ||
            t.AppUser.FirstName.ToLower() == search.ToLower() ||
            t.AppUser.LastName.ToLower() == search.ToLower() ||
            t.Software.Size.ToString() == search.ToLower());

            return result;
        }

        public void Update(SoftwareClaim uptodate)
        {
            var oldSoftwareClaim = ReadByID(uptodate.Id);
            oldSoftwareClaim.AppUserId = uptodate.AppUserId;
            oldSoftwareClaim.ClassRoomId = uptodate.ClassRoomId;
            oldSoftwareClaim.SoftwareId = uptodate.SoftwareId;
            oldSoftwareClaim.ClaimDate = uptodate.ClaimDate;
            oldSoftwareClaim.Status = uptodate.Status;
            db.SaveChanges();
        }
    }
}

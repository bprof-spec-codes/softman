using SoftwareManagerAPI.Models;
using SoftwareManagerAPI.Models.ViewModels;

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
            var classRoomId = softClassViewModel.ClassRoomId;
            var softId = softClassViewModel.SoftwareId;

            var sameSoftClaim = db.softwareClaims.FirstOrDefault(t => (
            t.Status == Status.Sent || t.Status == Status.Accepted) &&
            t.ClassRoomId == classRoomId &&
            t.SoftwareId == softId);

            if(sameSoftClaim==null)
            {
                SoftwareClaim softwareClaim = new SoftwareClaim();
                softwareClaim.SoftwareId = softId;
                softwareClaim.ClassRoomId = classRoomId;
                softwareClaim.AppUserId = appUserId;

                db.softwareClaims.Add(softwareClaim);
                db.SaveChanges();
                return softwareClaim;
            }
            throw new ArgumentException("There is already a claim with these paramaters by you or someone else...");
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
            var softClaim = db.softwareClaims.FirstOrDefault(t => t.Id == id);
            if(softClaim!=null)
            {
                return softClaim;
            }
            throw new ArgumentException("The claimed software with this Id does not exists...");
        }

        public IEnumerable<SoftwareClaim> SearchSoftwareClaims(string search)
        {
            var result = ReadAll().Where(t =>
            t.ClaimDate.ToString().ToLower().Contains(search.ToLower()) ||
            t.Status.ToString().ToLower().Contains(search.ToLower()) ||
            (
                t.AppUser != null && (
                    t.AppUser.FirstName.ToLower().Contains(search.ToLower()) ||
                    t.AppUser.LastName.ToLower().Contains(search.ToLower())
                )
            ) ||
            (t.Software != null && t.Software.Size.ToString().Contains(search.ToLower())));

            return result;
        }

        public SoftwareClaim Update(SoftwareClaim uptodate)
        {
            var oldSoftwareClaim = ReadByID(uptodate.Id);
            oldSoftwareClaim.AppUserId = uptodate.AppUserId;
            oldSoftwareClaim.ClassRoomId = uptodate.ClassRoomId;
            oldSoftwareClaim.SoftwareId = uptodate.SoftwareId;
            oldSoftwareClaim.ClaimDate = uptodate.ClaimDate;
            oldSoftwareClaim.Status = uptodate.Status;
            db.SaveChanges();

            return oldSoftwareClaim;
        }
    }
}

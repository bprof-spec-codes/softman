﻿using SoftwareManagerAPI.Models;
using SoftwareManagerAPI.Models.ViewModels;

namespace SoftwareManagerAPI.Data.Repository
{
    public interface ISoftwareClaimRepo
    {
        SoftwareClaim Create(SoftwareClassRoomViewModel softClassViewModel, string appUserId);
        SoftwareClaim DeleteByID(string id);
        IEnumerable<SoftwareClaim> ReadAll();
        SoftwareClaim ReadByID(string id);
        IEnumerable<SoftwareClaim> SearchSoftwareClaims(string search);
        SoftwareClaim Update(SoftwareClaim uptodate);
    }
}
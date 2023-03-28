﻿using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data.Repository
{
    public interface ISoftwareClaimRepo
    {
        void Create(SoftwareClassRoomViewModel softClassViewModel, string appUserId);
        void DeleteByID(string id);
        IEnumerable<SoftwareClaim> ReadAll();
        SoftwareClaim ReadByID(string id);
        void Update(SoftwareClaim uptodate);
    }
}
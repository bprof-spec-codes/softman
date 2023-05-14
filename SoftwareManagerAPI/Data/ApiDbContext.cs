using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design.Internal;
using SoftwareManagerAPI.Models;

namespace SoftwareManagerAPI.Data
{
    public class ApiDbContext : IdentityDbContext<AppUser>
    {

       

        public DbSet<AppUser> AppUsers { get; set; }
        public DbSet<ClassRoom> Classrooms { get; set; }
        public DbSet<Software> Softwares { get; set; }
        public DbSet<SoftwareClaim> softwareClaims { get; set; }

        public ApiDbContext(DbContextOptions<ApiDbContext> opt) : base(opt) { }
        protected override void OnModelCreating(ModelBuilder builder)
        {


            builder.Entity<SoftwareClaim>().HasOne(t => t.AppUser).WithMany(t => t.SoftwareClaims);
            builder.Entity<SoftwareClaim>().HasOne(t => t.ClassRoom).WithMany(t => t.SoftwareClaims);
            builder.Entity<SoftwareClaim>().HasOne(t => t.Software).WithMany(t => t.SoftwareClaims);
            builder.Entity<AppUser>().HasMany(t => t.SoftwareClaims).WithOne(t => t.AppUser);
            builder.Entity<ClassRoom>().HasMany(t => t.SoftwareClaims).WithOne(t => t.ClassRoom);
            builder.Entity<Software>().HasMany(t => t.SoftwareClaims).WithOne(t => t.Software);




            builder.Entity<IdentityRole>().HasData(
              new { Id = "1", Name = "Admin", NormalizedName = "ADMIN" },
              new { Id = "2", Name = "Customer", NormalizedName = "CUSTOMER" }
            );
           


            PasswordHasher<AppUser> ph = new PasswordHasher<AppUser>();
            AppUser kovi = new AppUser
            {
                Id = "User001",
                Email = "kovi91@gmail.com",
                EmailConfirmed = true,
                FirstName = "Kovács",
                LastName = "András",
                UserName = "kovi91@gmail.com",
                NormalizedEmail = "KOVI91@GMAIL.COM",
                NormalizedUserName = "KOVI91@GMAIL.COM"
            };
            kovi.PasswordHash = ph.HashPassword(kovi, "almafa123");
            builder.Entity<AppUser>().HasData(kovi);
            builder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>
            {
                RoleId = "1",
                UserId = kovi.Id
            });
            AppUser KisPista = new AppUser
            {
                Id = "User002",
                Email = "KisPista@gmail.com",
                EmailConfirmed = true,
                FirstName = "Kis",
                LastName = "Pista",
                UserName = "KisPista@gmail.com",
                NormalizedUserName = "KISPISTA@GMAIL.COM",
                NormalizedEmail = "KISPISTA@GMAIL.COM"
            };
            KisPista.PasswordHash = ph.HashPassword(KisPista, "almafa123");
            builder.Entity<AppUser>().HasData(KisPista);
            builder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>
            {
                RoleId = "2",
                UserId = KisPista.Id
            });
            AppUser Jozsi = new AppUser
            {
                Id = "User003",
                Email = "Jozsi@gmail.com",
                EmailConfirmed = true,
                FirstName = "Nagy",
                LastName = "József",
                UserName = "Jozsi@gmail.com",
                NormalizedUserName = "JOZSI@GMAIL.COM",
                NormalizedEmail = "JOZSI@GMAIL.COM"
            };
            Jozsi.PasswordHash = ph.HashPassword(Jozsi, "almafa123");
            builder.Entity<AppUser>().HasData(Jozsi);
            builder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>
            {
                RoleId = "2",
                UserId = Jozsi.Id
            });







            builder.Entity<ClassRoom>().HasData(
            new ClassRoom { Id = "Class0000", RoomNumber = "BA.01.11.", StorageCapacity = 3000 },
            new ClassRoom { Id = "Class0001", RoomNumber = "BC.04.07.", StorageCapacity = 3500 },
            new ClassRoom { Id = "Class0002", RoomNumber = "BA.11.20.", StorageCapacity = 1400 },
            new ClassRoom { Id = "Class0003", RoomNumber = "BA.03.18.", StorageCapacity = 1000 },
            new ClassRoom { Id = "Class0004", RoomNumber = "BD.02.11.", StorageCapacity = 2000 }
         );


            builder.Entity<SoftwareClaim>().HasData(
                 new SoftwareClaim()
                 {
                     Id = "SoftwareClaim0000",
                     ClaimDate = new DateTime(2023, 2, 11, 6, 23, 12),
                     Status = Status.Sent,
                     SoftwareId = "Soft0000",
                     ClassRoomId = "Class0001",
                     AppUserId = "User003"
                     
                 },
            new SoftwareClaim()
            {
                Id = "SoftwareClaim0001",
                ClaimDate = new DateTime(2022, 11, 20, 9, 45, 33),
                Status = Status.Rejected,
                SoftwareId = "Soft0001",
                ClassRoomId = "Class0001",
                AppUserId = "User003"
            },
            new SoftwareClaim()
            {
                Id = "SoftwareClaim0002",
                ClaimDate = new DateTime(2023, 1, 19, 9, 30, 30),
                Status = Status.Accepted,
                SoftwareId = "Soft0003",
                ClassRoomId = "Class0002",
                AppUserId = "User001"
            },
            new SoftwareClaim()
            {
                Id = "SoftwareClaim0003",
                ClaimDate = new DateTime(2020, 2, 9, 6, 10, 12),
                Status = Status.Rejected,
                SoftwareId = "Soft0003",
                ClassRoomId = "Class0001",
                AppUserId = "User002"
            },
            new SoftwareClaim()
            {
                Id = "SoftwareClaim0004",
                ClaimDate = new DateTime(2022, 6, 22, 9, 23, 12),
                Status = Status.Accepted,
                SoftwareId = "Soft0002",
                ClassRoomId = "Class0003",
                AppUserId = "User001"
            },
            new SoftwareClaim()
            {
                Id = "SoftwareClaim0005",
                ClaimDate = new DateTime(2015, 2, 11, 6, 23, 12),
                Status = Status.Rejected,
                SoftwareId = "Soft0004",
                ClassRoomId = "Class0002",
                AppUserId = "User002"
            }
                );
            string imagePath = @"C:\Users\Marci\Desktop\danika yasuo.png";
            builder.Entity<Software>().HasData(

            new Software() { Name = "Word", Size = 1500, VersionNumber = "2023", Id = "Soft0000", PictureData= File.ReadAllBytes(@"Teszt.png"), PictureContentType = "image/png" },
            new Software() { Name = "Excel", Size = 2000, VersionNumber = "2023", Id = "Soft0001" ,PictureData = File.ReadAllBytes(@"Teszt.png"), PictureContentType = "image/png" },
            new Software() { Name = "Visual Studio", Size = 4500, VersionNumber = "2022", Id = "Soft0002", PictureData = File.ReadAllBytes(@"Teszt.png"), PictureContentType = "image/png" },
            new Software() { Name = "Matlab", Size = 800, VersionNumber = "2018", Id = "Soft0003", PictureData = File.ReadAllBytes(@"Teszt.png"), PictureContentType = "image/png" },
            new Software() { Name = "Packet Tracer", Size = 600, VersionNumber = "2016", Id = "Soft0004", PictureData = File.ReadAllBytes(@"Teszt.png"), PictureContentType = "image/png" }
                );

            base.OnModelCreating(builder);
            ;
        }






    }
}

﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SoftwareManagerAPI.Data;

#nullable disable

namespace SoftwareManagerAPI.Migrations
{
    [DbContext(typeof(ApiDbContext))]
    [Migration("20230316191746_test")]
    partial class test
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "1",
                            Name = "Admin",
                            NormalizedName = "ADMIN"
                        },
                        new
                        {
                            Id = "2",
                            Name = "Customer",
                            NormalizedName = "CUSTOMER"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);

                    b.HasData(
                        new
                        {
                            UserId = "User001",
                            RoleId = "1"
                        },
                        new
                        {
                            UserId = "User002",
                            RoleId = "2"
                        },
                        new
                        {
                            UserId = "User003",
                            RoleId = "2"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("SoftwareManagerAPI.Models.AppUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "User001",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "14b62925-a399-4d3d-85d6-338879866f42",
                            Email = "kovi91@gmail.com",
                            EmailConfirmed = true,
                            FirstName = "Kovács",
                            LastName = "András",
                            LockoutEnabled = false,
                            NormalizedEmail = "KOVI91@GMAIL.COM",
                            NormalizedUserName = "KOVI91@GMAIL.COM",
                            PasswordHash = "AQAAAAEAACcQAAAAEA5IeRj6oM09hf3RpYvWOF+fV2TOxPFvFGgWSMAEJLxlKD4l/2eaNLY4636JCm7U3w==",
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "316e2707-e902-4bb7-bf0b-1dbd2180e8f4",
                            TwoFactorEnabled = false,
                            UserName = "kovi91@gmail.com"
                        },
                        new
                        {
                            Id = "User002",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "f46ffdf8-a042-4cad-a264-6f39a7bdf7d7",
                            Email = "KisPista@gmail.com",
                            EmailConfirmed = true,
                            FirstName = "Kis",
                            LastName = "Pista",
                            LockoutEnabled = false,
                            NormalizedUserName = "KISPISTA@GMAIL.COM",
                            PasswordHash = "AQAAAAEAACcQAAAAEExkGcJTmpe85RGk9wmdnALlnVJVraK66yx9JbF5wm22pCkMwQR2/AgePhijCvc8CA==",
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "08c166a8-3a7b-4ce8-8da5-e278fae31301",
                            TwoFactorEnabled = false,
                            UserName = "KisPista@gmail.com"
                        },
                        new
                        {
                            Id = "User003",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "03a1f751-5139-43ae-9895-1ba6afe0869d",
                            Email = "Jozsi@gmail.com",
                            EmailConfirmed = true,
                            FirstName = "Nagy",
                            LastName = "József",
                            LockoutEnabled = false,
                            NormalizedUserName = "JOZSI@GMAIL.COM",
                            PasswordHash = "AQAAAAEAACcQAAAAEHHiv5daOpKC6RaXaJisvVr0pCSvQ4B7VEEQCr7qB1N4rkGCXmbn+vku3rkGTj0u+g==",
                            PhoneNumberConfirmed = false,
                            SecurityStamp = "e56dbf58-b5a1-4cfc-ae4c-6babd03830aa",
                            TwoFactorEnabled = false,
                            UserName = "Jozsi@gmail.com"
                        });
                });

            modelBuilder.Entity("SoftwareManagerAPI.Models.ClassRoom", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoomNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("StorageCapacity")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("Classrooms");

                    b.HasData(
                        new
                        {
                            Id = "Class0000",
                            RoomNumber = "BA.01.11.",
                            StorageCapacity = 3000.0
                        },
                        new
                        {
                            Id = "Class0001",
                            RoomNumber = "BC.04.07.",
                            StorageCapacity = 3500.0
                        },
                        new
                        {
                            Id = "Class0002",
                            RoomNumber = "BA.11.20.",
                            StorageCapacity = 1400.0
                        },
                        new
                        {
                            Id = "Class0003",
                            RoomNumber = "BA.03.18.",
                            StorageCapacity = 1000.0
                        },
                        new
                        {
                            Id = "Class0004",
                            RoomNumber = "BD.02.11.",
                            StorageCapacity = 2000.0
                        });
                });

            modelBuilder.Entity("SoftwareManagerAPI.Models.Software", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PictureContentType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("PictureData")
                        .HasColumnType("varbinary(max)");

                    b.Property<double>("Size")
                        .HasColumnType("float");

                    b.Property<string>("VersionNumber")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Softwares");

                    b.HasData(
                        new
                        {
                            Id = "Soft0000",
                            Name = "Word",
                            Size = 1500.0,
                            VersionNumber = "2023"
                        },
                        new
                        {
                            Id = "Soft0001",
                            Name = "Excel",
                            Size = 2000.0,
                            VersionNumber = "2023"
                        },
                        new
                        {
                            Id = "Soft0002",
                            Name = "Visual Studio",
                            Size = 4500.0,
                            VersionNumber = "2022"
                        },
                        new
                        {
                            Id = "Soft0003",
                            Name = "Matlab",
                            Size = 800.0,
                            VersionNumber = "2018"
                        },
                        new
                        {
                            Id = "Soft0004",
                            Name = "Packet Tracer",
                            Size = 600.0,
                            VersionNumber = "2016"
                        });
                });

            modelBuilder.Entity("SoftwareManagerAPI.Models.SoftwareClaim", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("AppUserId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("ClaimDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("ClassRoomId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SoftwareId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("softwareClaims");

                    b.HasData(
                        new
                        {
                            Id = "SoftwareClaim0000",
                            AppUserId = "User003",
                            ClaimDate = new DateTime(2023, 2, 11, 6, 23, 12, 0, DateTimeKind.Unspecified),
                            ClassRoomId = "Class0001",
                            SoftwareId = "Soft0000",
                            Status = 0
                        },
                        new
                        {
                            Id = "SoftwareClaim0001",
                            AppUserId = "User003",
                            ClaimDate = new DateTime(2022, 11, 20, 9, 45, 33, 0, DateTimeKind.Unspecified),
                            ClassRoomId = "Class0001",
                            SoftwareId = "Soft0001",
                            Status = 2
                        },
                        new
                        {
                            Id = "SoftwareClaim0002",
                            AppUserId = "User001",
                            ClaimDate = new DateTime(2023, 1, 19, 9, 30, 30, 0, DateTimeKind.Unspecified),
                            ClassRoomId = "Class0002",
                            SoftwareId = "Soft0003",
                            Status = 1
                        },
                        new
                        {
                            Id = "SoftwareClaim0003",
                            AppUserId = "User002",
                            ClaimDate = new DateTime(2020, 2, 9, 6, 10, 12, 0, DateTimeKind.Unspecified),
                            ClassRoomId = "Class0001",
                            SoftwareId = "Soft0003",
                            Status = 2
                        },
                        new
                        {
                            Id = "SoftwareClaim0004",
                            AppUserId = "User001",
                            ClaimDate = new DateTime(2022, 6, 22, 9, 23, 12, 0, DateTimeKind.Unspecified),
                            ClassRoomId = "Class0003",
                            SoftwareId = "Soft0002",
                            Status = 1
                        },
                        new
                        {
                            Id = "SoftwareClaim0005",
                            AppUserId = "User002",
                            ClaimDate = new DateTime(2015, 2, 11, 6, 23, 12, 0, DateTimeKind.Unspecified),
                            ClassRoomId = "Class0002",
                            SoftwareId = "Soft0004",
                            Status = 2
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("SoftwareManagerAPI.Models.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("SoftwareManagerAPI.Models.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SoftwareManagerAPI.Models.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("SoftwareManagerAPI.Models.AppUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}

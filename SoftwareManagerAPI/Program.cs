using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SoftwareManagerAPI.Data;
using SoftwareManagerAPI.Data.Logic;
using SoftwareManagerAPI.Data.Repository;
using SoftwareManagerAPI.Models;
using System.Collections.Generic;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<ApiDbContext>(option =>
{
    option
    .UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=CarManagerJWT;Trusted_Connection=True;MultipleActiveResultSets=true")
    .UseLazyLoadingProxies();
});

builder.Services.AddTransient<IClassRoom, ClassRoomRepo>();
builder.Services.AddTransient<IAppuser, AppuserRepo>();
builder.Services.AddTransient<ISoftware, SoftwareRepo>();
builder.Services.AddTransient<ISoftwareClaim, SoftwareClaimRepo>();




builder.Services.AddIdentity<AppUser, IdentityRole>(option =>
{
    option.Password.RequiredLength = 8;
    option.Password.RequireNonAlphanumeric = false;
})
  .AddEntityFrameworkStores<ApiDbContext>()
  .AddDefaultTokenProviders();




builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();




var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();

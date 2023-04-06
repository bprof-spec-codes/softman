using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SoftwareManagerAPI.Data;
using SoftwareManagerAPI.Data.Repository;
using SoftwareManagerAPI.Filters;
using SoftwareManagerAPI.Models;
using System.Collections.Generic;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<ApiDbContext>(option =>
{
    option
    .UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=SoftManDb;Trusted_Connection=True;MultipleActiveResultSets=true")
    .UseLazyLoadingProxies();
});

builder.Services.AddTransient<IClassRoomRepo, ClassRoomRepo>();
builder.Services.AddTransient<IAppuserRepo, AppuserRepo>();
builder.Services.AddTransient<ISoftwareRepo, SoftwareRepo>();
builder.Services.AddTransient<ISoftwareClaimRepo, SoftwareClaimRepo>();




builder.Services.AddIdentity<AppUser, IdentityRole>(option =>
{
    option.Password.RequiredLength = 8;
    option.Password.RequireNonAlphanumeric = false;
    option.Password.RequireDigit= false;
    option.Password.RequireUppercase= false;
})
  .AddEntityFrameworkStores<ApiDbContext>()
  .AddDefaultTokenProviders();




builder.Services.AddControllers(opt=>
{
    opt.Filters.Add<ApiExceptionFilter>(); 
});
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

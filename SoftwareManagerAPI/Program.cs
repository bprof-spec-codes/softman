using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using SoftwareManagerAPI.Data;
using SoftwareManagerAPI.Data.Repository;
using SoftwareManagerAPI.Filters;
using SoftwareManagerAPI.Models;
using System.Collections.Generic;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<ApiDbContext>(option =>
{
    option
    .UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=SoftManDb;Trusted_Connection=True;MultipleActiveResultSets=true")
    .UseLazyLoadingProxies();
});



builder.Services.AddCors(option =>
{
    option.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});


builder.Services.AddIdentity<AppUser, IdentityRole>(option =>
{
    option.Password.RequiredLength = 6;
    option.Password.RequireNonAlphanumeric = false;
    option.Password.RequireDigit= false;
    option.Password.RequireUppercase= false;
})
  .AddEntityFrameworkStores<ApiDbContext>()
  .AddDefaultTokenProviders();

builder.Services.AddAuthentication
(option =>
{
    option.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;


    option.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;


    option.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;

}).AddJwtBearer(options =>
{ 
options.SaveToken = true;

options.RequireHttpsMetadata = true;

options.TokenValidationParameters = new TokenValidationParameters() {
    ValidateIssuer = true,

    ValidateAudience = true,

    ValidAudience = "http://www.security.org",

    ValidIssuer = "http://www.security.org",
    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("nagyonhosszutitkoskodhelye"))

};

});

builder.Services.AddTransient<IClassRoomRepo, ClassRoomRepo>();
builder.Services.AddTransient<IAppuserRepo, AppuserRepo>();
builder.Services.AddTransient<ISoftwareRepo, SoftwareRepo>();
builder.Services.AddTransient<ISoftwareClaimRepo, SoftwareClaimRepo>();

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

app.UseCors();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

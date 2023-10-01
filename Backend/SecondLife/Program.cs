using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Microsoft.IdentityModel.Tokens;

using SecondLife.Data;
using SecondLife.Helper;
using SecondLife.Interfaces;
using SecondLife.Models;
using SecondLife.Repositories;
using SIgnin_Manager.Interface;
using System.Security.Claims;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
//builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//.AddJwtBearer(options =>
//{
//    options.Authority = $"https://{builder.Configuration["Auth0:Domain"]}/";
//    options.Audience = builder.Configuration["Auth0:Audience"];
//    options.TokenValidationParameters = new TokenValidationParameters
//    {
//        NameClaimType = ClaimTypes.NameIdentifier
//    };
//});
//builder.Services.AddAuthentication(options =>
//{
//    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
//    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
//}).AddJwtBearer(options =>
//{
//    options.Authority = "https://dev-dwq46m1iw72xm3rr.us.auth0.com/";
//    options.Audience = "https://localhost:7024/api/Listing/all";
//});
    

//builder.Services
//  .AddAuthorization(options =>
//  {
//      options.AddPolicy(
//        "read:messages",
//        policy => policy.Requirements.Add(
//          new HasScopeRequirement("read:messages", domain)
//        )
//      );
//  });

//builder.Services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();

// Add services to the container.
builder.Services.AddScoped<IHomeInterface, HomeRepository>();

builder.Services.AddScoped<IOrderInterface, OrderRepository>();
builder.Services.AddScoped<IUser, UserRepository>();
builder.Services.AddScoped<IUserInterface,AuthenticateUserRepository>();
builder.Services.AddSingleton<JwtValidateAndDeserialize>();



builder.Services.AddControllers();


var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<SecondLife.Data.ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));


builder.Services.AddIdentity<Authenticate, IdentityRole>(options =>   // using applicationuser instead of identity user coz it inherits from identity user
{
    //options.Password.RequiredLength = 6;
    //options.Password.RequireUppercase = true;
}).AddEntityFrameworkStores<ApplicationDbContext>()
.AddDefaultTokenProviders();


//adding token gererator
builder.Services.AddAuthentication(auth =>
{
    auth.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    auth.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidAudience = "http://ahmadmozaffar.net",
        ValidIssuer = "http://ahmadmozaffar.net",
        RequireExpirationTime = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("This is the key that we will use in the encryption")),
        ValidateIssuerSigningKey = true
    };
});


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(option =>
{
    option.SwaggerDoc("v1", new OpenApiInfo { Title = "SecondLife", Version = "v1" });
    option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    });
    option.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            new string[]{}
        }
    });
});

var app = builder.Build();





// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthentication();


app.UseAuthorization();

app.MapControllers();

app.Run();

using AutoMapper;
using SecondLife.Data;
using SecondLife.DTO;
using SecondLife.Interfaces;
using SecondLife.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using SIgnin_Manager.Interface;

namespace SecondLife.Repositories
{
    public class AuthenticateUserRepository : IUserInterface
    {
        private ApplicationDbContext _context;
        private UserManager<Authenticate> _user;
       // private Mapper _mapper;
        private IConfiguration _configuration;
        public AuthenticateUserRepository(ApplicationDbContext context, UserManager<Authenticate> user, IConfiguration configuration)
            
        {
            _context = context;
            _user = user;
           // _mapper = mapper;
            _configuration = configuration;
        }

        public bool CheckUserDetails(string Email)
        {

            var result=_context.tbl_user_details.Where(x => x.Email == Email).ToList();
            if(result==null)
                return false;
            return true;
        }

        public UserDetailsDTO GetUserDetails(string UserId)
        {
            //token handler



            var user = _context.tbl_user_details.Where(a => a.UserData.Id == UserId).Select(a => new UserDetailsDTO()
            {
               // Email = a.Email,

                PhoneNumber = a.PhoneNumber,
                Address = a.Address,
                AboutMe = a.AboutMe,
                Name = a.Name,
            }).FirstOrDefault();


            return user;


        }




        //register user
        public async Task<UserManagerResponse> RegisterUserAsync(RegisterDTO model)
        {

            var doesExist = await _user.FindByEmailAsync(model.Email);
            if (doesExist != null)
                return new UserManagerResponse
                {
                    IsSuccess = false,
                    Message = "Email already used"


                };

            var user = new Authenticate
            {
                Email = model.Email,
                 UserName=model.Name.Replace(" ", string.Empty),
                




            };
            
                var result = await _user.CreateAsync(user, model.Password);
                if (result.Succeeded)  //remove this to add detils for users from anothe page
                {
                    var userDetails = new UserDetails();
                    var userData = await _user.FindByEmailAsync(model.Email);
                    userDetails.PhoneNumber = model.PhoneNumber;
                    userDetails.Address = model.Address;
                    userDetails.Email = model.Email;
                    userDetails.AboutMe = model.AboutMe;
                    userDetails.Name = model.Name;
                    userDetails.UserData = userData;
                    _context.tbl_user_details.Add(userDetails);
                    _context.SaveChanges();



                    return new UserManagerResponse
                    {
                        IsSuccess = true,
                        Message = "User is created"


                    };

                
            }

            else
            {

               var errors=result.Errors.Any();

                return new UserManagerResponse
                {
                    IsSuccess = false,
                    Message = errors.ToString()

                };
            }









        }



        //signin user
        public  async Task<UserManagerResponse> SignInUserAsync(SigninDTO model)
        {
            var user = await _user.FindByEmailAsync(model.Email);

             if (user == null)
            {
                return new UserManagerResponse
                {
                    Message = "There is no user with that Email address",
                    IsSuccess = false,
                };
            }

            var checkPassword = await _user.CheckPasswordAsync(user, model.Password);
            if (checkPassword!=true)
                return new UserManagerResponse
                {
                    Message = "Invalid password",

                    IsSuccess = false,



                };



            var claims = new[]
           {
                new Claim("Email", model.Email),
                new Claim("UserId", user.Id),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["AuthSettings:Key"]));

            var token = new JwtSecurityToken(
                issuer: "http://ahmadmozaffar.net",
                audience: "http://ahmadmozaffar.net",
                claims: claims,
                expires: DateTime.Now.AddDays(30),
                signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256));

            string tokenAsString = new JwtSecurityTokenHandler().WriteToken(token);


            
             var userddetails=_context.tbl_user_details.Where(a=>a.UserData.Id==user.Id).FirstOrDefault ();
            if (userddetails == null)
                return new UserManagerResponse
                {
                    Message="Add Details"

                };
                

             
             
             


          
            


            return new UserManagerResponse
            {
                Message = tokenAsString,
                IsSuccess = true,
                ExpireDate = token.ValidTo

            };















             // token, cookies, redirection
        }


        //signout user
        public UserManagerResponse SignoutUser()
        {
            throw new NotImplementedException();// signin vayesi balla yo
        }



        
























    }
}

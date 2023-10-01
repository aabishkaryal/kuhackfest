using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SecondLife.DTO;
using SecondLife.Interfaces;
using SecondLife.Models;
using System.IdentityModel.Tokens.Jwt;

namespace SecondLife.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserController : ControllerBase
    {

        public IUser _user;

        public UserController(IUser user)
        {
            _user = user;
        }

        [HttpPost]
        [Authorize]

        public IActionResult AddUserDetails(UserDetailsDTO user )
        {
            string token = HttpContext.Request.Headers["Authorization"].ToString();

            // The token comes with the "Bearer " prefix, so we need to remove it
            if (token.StartsWith("Bearer "))
            {
                token = token.Substring("Bearer ".Length);
            }
           // var user = _jwt.ValidateAndDeseerialize(token);
            var tokenHandler = new JwtSecurityTokenHandler();
            var jsonToken = tokenHandler.ReadToken(token) as JwtSecurityToken;
            var claims = jsonToken.Claims;
            var userid = claims.FirstOrDefault(c => c.Type == "UserId")?.Value;
            var result=_user.AddUserDetailsAsync(user,userid).Result;


            return Ok(result);
        }








    }
}

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SecondLife.Helper;
using SecondLife.Interfaces;
using SecondLife.Models;
using System.IdentityModel.Tokens.Jwt;

namespace SecondLife.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class OrderController : ControllerBase
    {
        public IOrderInterface _order;
        private readonly IUser _user;
        private readonly JwtValidateAndDeserialize _jwt;

        public OrderController(IOrderInterface order, IUser user, JwtValidateAndDeserialize jwt )
        {
            _order = order;
            _user = user;
            _jwt = jwt;
        }

        [HttpPost("order")]
        [Authorize]

        public IActionResult PostOrder(int adId, int price)
        {
            string token = HttpContext.Request.Headers["Authorization"].ToString();

            // The token comes with the "Bearer " prefix, so we need to remove it
            if (token.StartsWith("Bearer "))
            {
                token = token.Substring("Bearer ".Length);
            }
            var user = _jwt.ValidateAndDeseerialize(token);
            var tokenHandler = new JwtSecurityTokenHandler();
            var jsonToken = tokenHandler.ReadToken(user) as JwtSecurityToken;
            var claims = jsonToken.Claims;
            var userid = claims.FirstOrDefault(c => c.Type == "UserId")?.Value;

           


          //  var userid = 1;
            //take out the user from the token


            var result = _order.AddOrder( adId,  price,  userid);


            return Ok();
       }





    }








}

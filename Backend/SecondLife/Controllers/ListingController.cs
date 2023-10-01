using SecondLife.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SecondLife.DTO;
using Microsoft.AspNetCore.Authorization;
using Stripe;
using System.IdentityModel.Tokens.Jwt;
using SecondLife.Helper;

namespace SecondLife.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListingController : ControllerBase    //Home Repository
    {

        public IHomeInterface _listing;
        private readonly JwtValidateAndDeserialize _jwt;

        public ListingController(IHomeInterface listing, JwtValidateAndDeserialize jwt)
        {
            _listing = listing;
            _jwt = jwt;
        }


        [HttpPost("list")]
        [Authorize]

        public IActionResult PostList(PostAdsDTO adsDetails)
        {

            string token = HttpContext.Request.Headers["Authorization"].ToString();

            // The token comes with the "Bearer " prefix, so we need to remove it
            if (token.StartsWith("Bearer "))
            {
                token = token.Substring("Bearer ".Length);
            }
            var user = _jwt.ValidateAndDeseerialize(token);

            // var user = "";
            var result = _listing.PostAds(adsDetails,user).Result;

            return Ok(result);



        }
        



        [HttpGet("all")]
        [Authorize]

        public IActionResult GetAllListing()
        {
            string token = HttpContext.Request.Headers["Authorization"].ToString();

            // The token comes with the "Bearer " prefix, so we need to remove it
            if (token.StartsWith("Bearer "))
            {
                token = token.Substring("Bearer ".Length);
            }
            var user = _jwt.ValidateAndDeseerialize(token);

            var result = _listing.GetAdsRandomly(user);


            return Ok(result);
        }



        [HttpGet("{id}")]
        [Authorize]

        public IActionResult GetListById(int id)
        {
            // var result = _adsSelect.AdsDetails(id);


            string token = HttpContext.Request.Headers["Authorization"].ToString();

            // The token comes with the "Bearer " prefix, so we need to remove it
            if (token.StartsWith("Bearer "))
            {
                token = token.Substring("Bearer ".Length);
            }
            var user = _jwt.ValidateAndDeseerialize(token);

            var result = _listing.AdsDetails(id);
            return Ok();

        }


        [HttpGet("category/{category}")]
        [Authorize]

        public IActionResult GetListByCategory(string category)
        {
            // var result = _adsSelect.AdsDetails(id);
            string token = HttpContext.Request.Headers["Authorization"].ToString();

            // The token comes with the "Bearer " prefix, so we need to remove it
            if (token.StartsWith("Bearer "))
            {
                token = token.Substring("Bearer ".Length);
            }
            var user = _jwt.ValidateAndDeseerialize(token);


            var result =_listing.GetAdsByCategory(category);






            return Ok(result);

        }
        //[HttpGet("saved")]
        //public IActionResult GetSavedList()
        //{
        //    // var result = _adsSelect.AdsDetails(id);

        //    var result = _listing.GetAdsByCategory(category);






        //    return Ok(result);

        //}

       






















    }
}

using Microsoft.EntityFrameworkCore;
using SecondLife.Data;
using SecondLife.DTO;
using SecondLife.Interfaces;
using SecondLife.Models;

using System.IdentityModel.Tokens.Jwt;

namespace SecondLife.Repositories
{
    public class HomeRepository : IHomeInterface
    {

        private readonly ApplicationDbContext _context;


        public HomeRepository(ApplicationDbContext context)
        {
            _context = context;


        }

        public AdsDetailDTO AdsDetails(int id)
        {

            var result = _context.tbl_ads.
           Include(a => a.Ad_by_user)
           .Include(a => a.Ad_Location)
           .Include(a => a.Category_ad)

           .FirstOrDefault(a => a.Id == id);



            if (result == null)
                return null;

            var Price = _context.tbl_order.Where(a => a.OrderToAd.Id == id).ToList();
            var lPrice = Price.Last();
            var lastPrice=lPrice.price;



            var viewResult = new AdsDetailDTO
            {
                Id = result.Id,
                PhoneNumberOfSeller = result.Ad_by_user.PhoneNumber,
                AdByUser = result.Ad_by_user.Name,
                AdDescription = result.AdDescription,
                AdsAddress = result.AdAddress,
                CreatedDate = result.CreatedDate,
                AdTitle = result.AdTitle,
                Price = result.Price,
               // ImageData = result.Picture,
                LastPrice = lastPrice,
                ImageData1=result.Picture1,
                ImageData2=result.Picture2,
                ImageData3 =result.Picture3,
                ImageData4=result.Picture4

                //can also add timeleft while giving the details of the post


            };

           

           

            return viewResult;


        }

        public ICollection<AdsFirstLookDTO> GetAdsByCategory(string category)
        {
            var ads = _context.tbl_ads.Where(a => a.Category_ad.CategoryName == category).OrderBy(r => Guid.NewGuid()).Take(10).Select(x => new AdsFirstLookDTO()
            {
                Id = x.Id,
                AdTitle = x.AdTitle,
                Price = x.Price,
                ImageData = x.Picture1

            }).ToList();

            var count = ads.Count();
            if (count % 2 == 0)
                return ads;

            else
            {
                Random random = new Random();
                int randomIndex = random.Next(0, count); // Generate a random index within the list bounds

                ads.RemoveAt(randomIndex);
                return ads;
            }

        }






        //public ICollection<AdsFirstLookDTO> GetAdsByLocation(Location location)
        //{


        //    var ads = _context.tbl_ads.Where(x => x.Ad_Location.City == location.City).OrderBy(r => Guid.NewGuid()).Take(10).Select(x => new AdsFirstLookDTO()
        //    {
        //        Id = x.Id,
        //        AdTitle = x.AdTitle,
        //        Price = x.Price,
        //        ImageData=x.Picture
        //    }).ToList();   // k gareko vanda, database bata location same vako lai fetch gareko, ani random order ma rakheko guid use garera ani top 10 ligeko  ani mapping gareko;

        //    var count = ads.Count();

        //    //var ads = _context.tbl_ads.Where(x => x.Ad_Location.City == location.City).Select (x => new AdsFirstLookDTO()
        //    //{
        //    //    AdTitle = x.AdTitle,
        //    //    Price = x.Price,
        //    //}).ToList();   // k gareko vanda, database bata location same vako lai fetch gareko ani mapping gareko


        //    if (ads==null ||count==1)
        //    { // yedi null xa vane random location bata ads fetch garera return garne 




        //        var ads1 = _context.tbl_ads.OrderBy(r => Guid.NewGuid()).Take(10).Select(x => new AdsFirstLookDTO()
        //        {
        //            Id= x.Id,
        //            AdTitle = x.AdTitle,
        //            Price = x.Price,
        //            ImageData = x.Picture

        //        }).ToList();



        //        var count1 = ads1.Count();
        //        if (count1 % 2 == 0)
        //            return ads1;

        //        else
        //        {
        //            Random random = new Random();
        //            int randomIndex = random.Next(0, count1); // Generate a random index within the list bounds

        //            ads1.RemoveAt(randomIndex);
        //            return ads1;
        //        }


        //    }



        //if (count % 2==0)
        //    return ads;

        //else
        //{
        //    Random random = new Random();
        //    int randomIndex = random.Next(0, count); // Generate a random index within the list bounds

        //    ads.RemoveAt(randomIndex);
        //    return ads;
        //}












        //}

        public ICollection<AdsFirstLookDTO> GetAdsRandomly()
        {
            DateTime now = DateTime.Now;

            var ads = _context.tbl_ads/*Where(x => x.BiddingLimit > (now - x.CreatedDate).Value.Days)*/.OrderBy(r => Guid.NewGuid()).Take(10).Select(x => new AdsFirstLookDTO()
            {
                Id = x.Id,
                AdTitle = x.AdTitle,
                Price = x.Price,
                ImageData = x.Picture1

            }).ToList();

            var count = ads.Count();
            if (count % 2 == 0)
                return ads;

            else
            {
                Random random = new Random();
                int randomIndex = random.Next(0, count); // Generate a random index within the list bounds

                ads.RemoveAt(randomIndex);
                return ads;
            }







        }

        public ICollection<AdsFirstLookDTO> GetAdsRandomly(string user)
        {

            var handler = new JwtSecurityTokenHandler();
            //trying
            //var token = handler.ReadJwtToken(user.Replace("\0", "")); //as JwtSecurityToken;
            var jsonToken = handler.ReadToken(user) as JwtSecurityToken;
            var claims = jsonToken.Claims;
            // var userId = claims.FirstOrDefault(c => c.Type == "Email")?.Value;


            // extract the user from the cookie using email in the cookie
            var email_from_cookie = claims.FirstOrDefault(c => c.Type == "Email")?.Value;


            var ads = _context.tbl_ads.Where(a => a.Ad_by_user.Email != email_from_cookie).OrderBy(r => Guid.NewGuid()).Take(10).Select(x => new AdsFirstLookDTO()
            {
                Id = x.Id,
                AdTitle = x.AdTitle,
                Price = x.Price,
                ImageData = x.Picture1

            }).ToList();

            var count = ads.Count();
            if (count % 2 == 0)
                return ads;

            else
            {
                Random random = new Random();
                int randomIndex = random.Next(0, count); // Generate a random index within the list bounds

                ads.RemoveAt(randomIndex);
                return ads;
            }
           
        }

        public async Task<UserManagerResponse> PostAds(PostAdsDTO postDetails, string user)
        {
            var post = new UserAds();
            var pictures = new List<Byte[]>();   
            //yourEntity.Pictures = new List<byte[]>();
          //  post.Pictures=new List<AdPicture>();
            var postCategory = _context.tbl_category.Where(a => a.CategoryName == postDetails.category).FirstOrDefault();
            var PostLocation = _context.tbl_location.Where(a => a.City == postDetails.location.City).FirstOrDefault();

            if (postDetails.ImageFiles != null && postDetails.ImageFiles.Count > 0)
            {
                //var length=postDetails.ImageFile.Length;
                foreach (var file in postDetails.ImageFiles)
                    {
                    byte[] imageData;

                    using (var memoryStream = new MemoryStream())
                    {
                        file.CopyTo(memoryStream);
                        imageData = memoryStream.ToArray();
                       
                    }
                  pictures.Add(imageData);

                    
                }

                post.Picture1=pictures[0];
                post.Picture2=pictures[1];
                post.Picture3 = pictures[2];
                post.Picture4 = pictures[3];



                post.AdTitle = postDetails.AdTitle;
                post.AdDescription = postDetails.AdDescription;
                 post.Price = postDetails.Price;
                post.Category_ad = postCategory;
                post.CreatedDate = DateTime.Now;
                post.AdAddress = postDetails.AdAddress;
              
                    //  Ad_Location = PostLocation;


                





                var handler = new JwtSecurityTokenHandler();
                //trying
                //var token = handler.ReadJwtToken(user.Replace("\0", "")); //as JwtSecurityToken;
                var jsonToken = handler.ReadToken(user) as JwtSecurityToken;
                var claims = jsonToken.Claims;
                // var userId = claims.FirstOrDefault(c => c.Type == "Email")?.Value;


                // extract the user from the cookie using email in the cookie
                var email_from_cookie = claims.FirstOrDefault(c => c.Type == "Email")?.Value;
                var adsBy = _context.tbl_user_details.Where(a => a.Email == email_from_cookie).FirstOrDefault();

                post.Ad_by_user = adsBy;


                // var adsLocation=_context.tbl_location.Where(a=>a.City==postDetails.location.City && a.State==postDetails.location.State /*&& a.Neighbourhood==postDetails.location.Neighbourhood*/).FirstOrDefault();

                post.Ad_Location = PostLocation;

                _context.tbl_ads.Add(post);
                _context.SaveChanges();

                var result = new UserManagerResponse();
                result.IsSuccess = true;
                result.Message = "List added";

                return   result;


            }

            return new UserManagerResponse { IsSuccess = false,
                Message="error solving the photos"
            
            };

        }
    }
}


//        public ProfileDTO GetProfile(string user)
//        {
//            var handler = new JwtSecurityTokenHandler();
//            //trying
//            //var token = handler.ReadJwtToken(user.Replace("\0", "")); //as JwtSecurityToken;
//            var jsonToken = handler.ReadToken(user) as JwtSecurityToken;
//            var claims = jsonToken.Claims;
//            // var userId = claims.FirstOrDefault(c => c.Type == "Email")?.Value;


//            // extract the user from the cookie using email in the cookie
//            var email_from_cookie = claims.FirstOrDefault(c => c.Type == "Email")?.Value;

//            var result = _context.tbl_user_details.Where(a=>a.Email==email_from_cookie).FirstOrDefault();
//            var profile = new ProfileDTO
//            {
//                Name = result.Name,
//                Email = result.Email,
//                Address = result.Address,
//                PhoneNumber = result.PhoneNumber,
//            };
//            return profile;
            




            
//        }

//        public ProfileDTO EditProfile(ProfileDTO profile, string user)
//        {
//            var handler = new JwtSecurityTokenHandler();
//            //trying
//            //var token = handler.ReadJwtToken(user.Replace("\0", "")); //as JwtSecurityToken;
//            var jsonToken = handler.ReadToken(user) as JwtSecurityToken;
//            var claims = jsonToken.Claims;
//            // var userId = claims.FirstOrDefault(c => c.Type == "Email")?.Value;


//            // extract the user from the cookie using email in the cookie
//            var email_from_cookie = claims.FirstOrDefault(c => c.Type == "Email")?.Value;
//            var result = _context.tbl_user_details.Where(a => a.Email == email_from_cookie).FirstOrDefault();
//            result.Name=profile.Name;
//            result.Email=profile.Email;
//            result.Address=profile.Address;
//            result.PhoneNumber=profile.PhoneNumber;




//            _context.Update(result);
//            _context.SaveChanges();


//            //var result1 = _userManager.FindByEmailAsync(email_from_cookie).Result;
//            //result1.Email=profile.Email;
//            //_userManager.UpdateAsync(result1);

//            _context.SaveChanges();
//            return profile;







//        }

//        public bool DeleteUser(string user)
//        {
//            var handler = new JwtSecurityTokenHandler();
//            //trying
//            //var token = handler.ReadJwtToken(user.Replace("\0", "")); //as JwtSecurityToken;
//            var jsonToken = handler.ReadToken(user) as JwtSecurityToken;
//            var claims = jsonToken.Claims;
//            // var userId = claims.FirstOrDefault(c => c.Type == "Email")?.Value;


//            // extract the user from the cookie using email in the cookie
//            var email_from_cookie = claims.FirstOrDefault(c => c.Type == "Email")?.Value;
//            var id_cookie = claims.FirstOrDefault(c => c.Type == "UserId")?.Value;

//            var result = _context.tbl_user_details.Where(a => a.Email == email_from_cookie).FirstOrDefault();
//            _context.tbl_user_details.Remove(result);


//           // var user1 = _userManager.FindByEmailAsync(email_from_cookie).Result;
//           //var result1= _userManager.DeleteAsync(user1).Result;
//            // var exitStatus = Convert.ToBoolean(_context.SaveChanges())?true : false;
//            _context.SaveChanges();
//            var exitStatus = true;
//            return exitStatus;

            
//        }

//        public ICollection<AdsFirstLookDTO> GetMyAds(string user)
//        {
//            var handler = new JwtSecurityTokenHandler();
//            //trying
//            //var token = handler.ReadJwtToken(user.Replace("\0", "")); //as JwtSecurityToken;
//            var jsonToken = handler.ReadToken(user) as JwtSecurityToken;
//            var claims = jsonToken.Claims;
//            // var userId = claims.FirstOrDefault(c => c.Type == "Email")?.Value;


//            // extract the user from the cookie using email in the cookie
//            var email_from_cookie = claims.FirstOrDefault(c => c.Type == "Email")?.Value;
//           // var id_cookie = claims.FirstOrDefault(c => c.Type == "UserId")?.Value;

//            var result=_context.tbl_user_details.Where(a=>a.Email== email_from_cookie).FirstOrDefault();

//            var ads=_context.tbl_ads.Where(a=>a.Ad_by_user.Id==result.Id).Select(x => new AdsFirstLookDTO()
//            {
//                Id = x.Id,
//                AdTitle = x.AdTitle,
//                Price = x.Price,
//                ImageData = x.Picture

//            }).ToList();

//            return ads;





//        }

//        public ICollection<AdsFirstLookDTO> GetAdsByLocation(Location location, string user)
//        {
//            var handler = new JwtSecurityTokenHandler();
//            //trying
//            //var token = handler.ReadJwtToken(user.Replace("\0", "")); //as JwtSecurityToken;
//            var jsonToken = handler.ReadToken(user) as JwtSecurityToken;
//            var claims = jsonToken.Claims;
//            // var userId = claims.FirstOrDefault(c => c.Type == "Email")?.Value;


//            // extract the user from the cookie using email in the cookie
//            var email_from_cookie = claims.FirstOrDefault(c => c.Type == "Email")?.Value;
//            var ads = _context.tbl_ads.Where(x => x.Ad_Location.City == location.City && x.Ad_by_user.Email!=email_from_cookie).OrderBy(r => Guid.NewGuid()).Take(10).Select(x => new AdsFirstLookDTO()
//            {
//                Id = x.Id,
//                AdTitle = x.AdTitle,
//                Price = x.Price,
//                ImageData = x.Picture

//            }).ToList();   // k gareko vanda, database bata location same vako lai fetch gareko, ani random order ma rakheko guid use garera ani top 10 ligeko  ani mapping gareko;

//            var count = ads.Count();

           


//            if (ads == null || count == 1)
//            { // yedi null xa vane random location bata ads fetch garera return garne 




//                var ads1 = _context.tbl_ads.Where(a => a.Ad_by_user.Email != email_from_cookie).OrderBy(r => Guid.NewGuid()).Take(10).Select(x => new AdsFirstLookDTO()
//                {
//                    Id = x.Id,
//                    AdTitle = x.AdTitle,
//                    Price = x.Price,
//                    ImageData = x.Picture

//                }).ToList();



//                var count1 = ads1.Count();
//                if (count1 % 2 == 0)
//                    return ads1;

//                else
//                {
//                    Random random = new Random();
//                    int randomIndex = random.Next(0, count1); // Generate a random index within the list bounds

//                    ads1.RemoveAt(randomIndex);
//                    return ads1;
//                }


//            }



//            if (count % 2 == 0)
//                return ads;

//            else
//            {
//                Random random = new Random();
//                int randomIndex = random.Next(0, count); // Generate a random index within the list bounds

//                ads.RemoveAt(randomIndex);
//                return ads;
//            }




//        }

//        public ICollection<AdsFirstLookDTO> GetAdsRandomly(string user)
//        {

//            var handler = new JwtSecurityTokenHandler();
//            //trying
//            //var token = handler.ReadJwtToken(user.Replace("\0", "")); //as JwtSecurityToken;
//            var jsonToken = handler.ReadToken(user) as JwtSecurityToken;
//            var claims = jsonToken.Claims;
//            // var userId = claims.FirstOrDefault(c => c.Type == "Email")?.Value;


//            // extract the user from the cookie using email in the cookie
//            var email_from_cookie = claims.FirstOrDefault(c => c.Type == "Email")?.Value;


//            var ads = _context.tbl_ads.Where(a=>a.Ad_by_user.Email!=email_from_cookie).OrderBy(r => Guid.NewGuid()).Take(10).Select(x => new AdsFirstLookDTO()
//            {
//                Id = x.Id,
//                AdTitle = x.AdTitle,
//                Price = x.Price,
//                ImageData = x.Picture

//            }).ToList();

//            var count = ads.Count();
//            if (count % 2 == 0)
//                return ads;

//            else
//            {
//                Random random = new Random();
//                int randomIndex = random.Next(0, count); // Generate a random index within the list bounds

//                ads.RemoveAt(randomIndex);
//                return ads;
//            }

//        }
//    }
//}


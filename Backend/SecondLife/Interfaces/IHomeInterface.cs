using SecondLife.DTO;
using SecondLife.Models;

namespace SecondLife.Interfaces
{
    public interface IHomeInterface
    {

        //ICollection<AdsFirstLookDTO> GetAdsByLocation(Location location);

        //ICollection<AdsFirstLookDTO> GetAdsByLocation(Location location,string user);


        ICollection<AdsFirstLookDTO> GetAdsRandomly();
        AdsDetailDTO AdsDetails(int id);
        ICollection<AdsFirstLookDTO> GetAdsByCategory(string category);

        Task<UserManagerResponse> PostAds(PostAdsDTO postDetails, string user);
        ICollection<AdsFirstLookDTO> GetAdsRandomly(string user);



        //ICollection<AdsFirstLookDTO> GetAdsRandomly(string user);


        //ProfileDTO GetProfile(string user);

        //ProfileDTO EditProfile(ProfileDTO profile, string user);

        ////bool DeleteUser(string user);
        //ICollection<AdsFirstLookDTO> GetMyAds(string user);




    }
}

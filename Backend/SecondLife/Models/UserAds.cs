using Microsoft.EntityFrameworkCore;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace SecondLife.Models
{
    public class UserAds
    {

          [Key]
        public int Id { get; set; }
        public string AdTitle { get; set; }

        public string AdDescription { get; set; }

        public string? Price { get; set; }
        public string AdAddress { get; set; }
        public byte[]? Picture1 { get; set; }
        public byte[]? Picture2 { get; set; }
        public byte[]? Picture3 { get; set; }
        public byte[]? Picture4 { get; set; }

        // public List<byte[]> Pictures { get; set; }



        // public string PicturePath { get; set; }   // to save pictures uploaded by user about ads, need multiple pictures

        public DateTime? CreatedDate { get; set; }

        public int BiddingLimit{get;set;}
        public Location Ad_Location { get; set; }   //change the location and add AdsAdress

        public UserDetails Ad_by_user { get; set; }

       // public Booking Booking_ad { get; set; }

        public Category Category_ad { get; set; }



    }

    public class AdPicture
    {
        [Key]
        public int Id { get; set; }
        public byte[] PictureData { get; set; }

        // Foreign key to relate to the UserAds entity
        public int UserAdsId { get; set; }
        public UserAds UserAds { get; set; }
    }
}

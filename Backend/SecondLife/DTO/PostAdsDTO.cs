using SecondLife.Models;

namespace SecondLife.DTO
{
    public class PostAdsDTO
    {
        public string AdTitle { get; set; }

        public string AdDescription { get; set; }

        public string? Price { get; set; }

        // public string PicturePath { get; set; }

       // public IFormFile ImageFile { get; set; }
        public List<IFormFile> ImageFiles { get; set; }

        public string category { get; set; }

        public LocationDTO location { get; set; }

        public string AdAddress { get; set; }  ///address where the item is available
    
    }

}

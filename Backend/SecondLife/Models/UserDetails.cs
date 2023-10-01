

namespace SecondLife.Models
{
    public class UserDetails
    {
        public int Id { get; set; }

        public String Name { get; set; }=String.Empty;

        public String Email { get; set; }= String.Empty;

        public string PhoneNumber { get; set; }= String.Empty;

        public String? AboutMe { get; set; } = String.Empty;

        public String Address { get; set; } = String.Empty;

      //  public String PicturePath { get; set; }  // to store user profile picture

        public Authenticate UserData { get; set; }

        

        public ICollection<UserAds> userAds { get; set; }

       
        







    }
}

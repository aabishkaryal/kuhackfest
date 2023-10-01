namespace SecondLife.Models
{
    public class Favourite
    {
        public int Id { get; set; }


        public UserDetails UserDetails { get; set; }

        public UserAds AdToFav{ get; set; }
    }
}

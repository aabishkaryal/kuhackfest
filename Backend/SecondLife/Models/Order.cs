namespace SecondLife.Models
{
    public class Order
    {
        public int Id { get; set; }

       public UserAds OrderToAd { get; set; }
    public    UserDetails OrderGivenBy { get; set; }
        public int price { get; set; }
    }
}

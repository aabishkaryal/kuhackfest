namespace SecondLife.Models
{
    public class Location
    {
        public int Id { get; set; }

        public string State { get; set; }   // use enums for this
        public string City { get; set; }   // use enums for this

       // public string Neighbourhood { get; set; }

        public ICollection<UserAds> AllAds { get; set; }

       // public ICollection<UserDetails> Users { get; set; }
    }
}

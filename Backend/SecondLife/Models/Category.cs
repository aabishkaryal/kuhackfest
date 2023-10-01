namespace SecondLife.Models
{
    public class Category    //must use enums for this
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }

        public ICollection<UserAds> Ad_of_this_category { get; set; }
    }
}

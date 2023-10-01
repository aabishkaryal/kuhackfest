namespace SecondLife.DTO
{
    public class AdsFirstLookDTO
    {

        public int Id { get; set; }
        public string AdTitle { get; set; }
        public string? Price { get; set; }
        //public string PicturePath { get; set; }
        public byte[]? ImageData { get; set; }
    }
}

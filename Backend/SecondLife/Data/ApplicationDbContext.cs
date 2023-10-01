using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SecondLife.Models;

namespace SecondLife.Data
{
    public class ApplicationDbContext:IdentityDbContext

    {


        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        { }

        //public DbSet<SecondLife.Models.Booking> tbl_bookings { get; set; }
        public DbSet<SecondLife.Models.Category> tbl_category { get; set; }


        public DbSet<SecondLife.Models.Location> tbl_location { get; set; }

        public DbSet<SecondLife.Models.UserAds> tbl_ads { get; set; }

        public DbSet<SecondLife.Models.UserDetails> tbl_user_details { get; set; }

        public DbSet<SecondLife.Models.Order> tbl_order { get; set; }
       // public DbSet<AdPicture> AdPictures { get; set; }

        public DbSet<Favourite> tbl_favourites { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<UserAds>()
        //        .HasMany(u => u.Pictures)
        //        .WithOne(p => p.UserAds)
        //        .HasForeignKey(p => p.UserAdsId);
        //}








    }
}

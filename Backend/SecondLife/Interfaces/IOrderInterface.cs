using SecondLife.DTO;
using SecondLife.Models;

namespace SecondLife.Interfaces
{
    public interface IOrderInterface
    {


       // public ICollection<AdsFirstLookDTO> MyOrder(string user);

        public bool AddOrder(int adId, int price, string userId);

        public bool DeleteOrder(int orderId);


        bool Save();




    }
}

using Microsoft.AspNetCore.Identity;
using SecondLife.Data;
using SecondLife.DTO;
using SecondLife.Interfaces;
using SecondLife.Models;

namespace SecondLife.Repositories
{
    public class OrderRepository : IOrderInterface
    {
        public ApplicationDbContext _context;
        private readonly UserManager<Authenticate> _user;

        public OrderRepository(ApplicationDbContext context, UserManager<Authenticate> user)
        {
            _context = context;
            _user = user;
        }

        public bool AddOrder(int adId, int price, string userId)
        {

            var ad = _context.tbl_ads.Where(a => a.Id == adId).First();
            var user=_context.tbl_user_details.Where(a => a.UserData.Id== userId).First();

            var order = new Order()
            {
                price = price,
                OrderToAd=ad,
                OrderGivenBy=user,


            };
            
            _context.tbl_order.Add(order);
            var result = Save();
            return result;


        }

        public bool DeleteOrder(int orderId)
        {

            var order= _context.tbl_order.Find(orderId);

            _context.tbl_order.Remove(order);
            var result= Save();
            return result;





        }


        public bool Save()
        {

            var saved=_context.SaveChanges();
            return saved>0?true:false;  
           
        }
    }
}

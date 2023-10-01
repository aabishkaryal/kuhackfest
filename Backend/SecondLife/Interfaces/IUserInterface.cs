using SecondLife.DTO;
using SecondLife.Models;

namespace SIgnin_Manager.Interface
{
    public interface IUserInterface
    {


        Task<UserManagerResponse> RegisterUserAsync(RegisterDTO model); //task is used for asyncronous operations 

        Task<UserManagerResponse> SignInUserAsync(SigninDTO model);

        //   Task<UserManagerResponse> SignoutAsync();

        bool CheckUserDetails(string Email);

        UserManagerResponse SignoutUser();

        public UserDetailsDTO GetUserDetails(string UserId);
        //Task<UserManagerResponse> ResetPasswordAsync(ResetPasswordViewModel model);
    }
}

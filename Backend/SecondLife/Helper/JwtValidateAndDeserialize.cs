using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace SecondLife.Helper
{
    public class JwtValidateAndDeserialize
    {
        public IConfiguration _configuration;

        public JwtValidateAndDeserialize(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        public string ValidateAndDeseerialize(string Token)
        {
            try
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var validationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes((_configuration["AuthSettings:Key"]))),
                    ValidateIssuer = false, // Set to true if you have a specific issuer
                    ValidateAudience = false // Set to true if you have a specific audience  // what is the use of this
                };

                SecurityToken validatedToken;

                var principal = tokenHandler.ValidateToken(Token, validationParameters, out validatedToken);

                // Check if the validatedToken is a JwtSecurityToken
                if (validatedToken is JwtSecurityToken jwtSecurityToken)
                {
                    string tokenAsString = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken); //convert token to string
                    return tokenAsString;
                    //var token = new JwtSecurityTokenHandler();
                    //var jsonToken = token.ReadToken(tokenAsString) as JwtSecurityToken;
                    //var claims = jsonToken.Claims;
                    //// var userId = claims.FirstOrDefault(c => c.Type == "Email")?.Value;


                    //// extract the user from the cookie using email in the cookie
                    //var email_from_cookie = claims.FirstOrDefault(c => c.Type == "Email")?.Value;

                }
                else
                {
                    throw new SecurityTokenException("Invalid JWT token.");
                }
            }
            catch (SecurityTokenInvalidSignatureException)
            {
                throw new Exception("Invalid token signature.");
            }
            catch (SecurityTokenExpiredException)
            {
                throw new Exception("Token has expired.");
            }
            catch (SecurityTokenException ex)
            {
                throw new Exception("Invalid token.", ex);
            }
            catch (Exception ex)
            {
                throw new Exception("Error occurred while validating the token.", ex);
            }
        }

            // token = validatedToken;


           

        


    }
}

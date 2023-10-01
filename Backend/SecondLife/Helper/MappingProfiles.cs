using AutoMapper;
using SecondLife.DTO;
using SecondLife.Models;

namespace SecondLife.Helper
{
    public class MappingProfiles:Profile
    {

        public MappingProfiles()
        {
           // CreateMap<Location, LocationDTO>();   
            
            CreateMap<LocationDTO, Location>();
        }
    }
}

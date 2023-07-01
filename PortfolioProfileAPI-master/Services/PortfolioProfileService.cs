using PortfolioAPI.Exceptions;
using PortfolioAPI.Models;
using PortfolioAPI.Repository;

namespace PortfolioAPI.Services
{
    public class PortfolioProfileService : IPortfolioProfileService
    {
        private readonly IPortfolioProfileRepository _portfolioProfileRepository;

        public PortfolioProfileService(IPortfolioProfileRepository portfolioProfileRepository)
        {
            _portfolioProfileRepository = portfolioProfileRepository;
        }

        public async Task<IEnumerable<PortfolioProfile>> GetPortfolioProfiles(string username)
        {
            var portfolios=await _portfolioProfileRepository.GetPortfolioProfiles(username);
            if (portfolios == null)
            {
                throw new PortfolioProfileNotFoundException("No Portfolios Created");
            }
            return portfolios;

        }

        public async Task<PortfolioProfile> GetPortfolioProfile(int portfolioId)
        {

            var pp=await _portfolioProfileRepository.GetPortfolioProfile(portfolioId);
            if (pp == null)
            {
                throw new PortfolioProfileNotFoundException("No Portfolio Found");
            }
            return pp;
        }

        public async Task<PortfolioProfile> CreatePortfolioProfile(PortfolioProfile portfolioProfile)
        {
            using (HttpClient client = new HttpClient())
            {
                HttpResponseMessage response = await client.GetAsync($"https://localhost:7270/api/User/users/exists?username={portfolioProfile.UserName}");
                if (response.IsSuccessStatusCode)
                {
                    string jsonresponse = await response.Content.ReadAsStringAsync();
                    bool status = Boolean.Parse(jsonresponse);
                    if (status)
                    {
                         var pp=await _portfolioProfileRepository.CreatePortfolioProfile(portfolioProfile);
                        return pp;
                    }
                    else
                    {
                        throw new UserDoesNotExistException("User Does Not Exist..");
                    }

                }
                else
                {
                    // Handle error response
                    throw new Exception();
                }
            }
        }

        public async Task UpdatePortfolioProfile(int id,PortfolioProfile portfolioProfile)
        {
            await _portfolioProfileRepository.UpdatePortfolioProfile(id,portfolioProfile);
        }

        public async Task DeletePortfolioProfile(int portfolioId)
        {
            await _portfolioProfileRepository.DeletePortfolioProfile(portfolioId);
        }

        public async Task<bool> PortfolioExists(int id)
        {
            var isPortfolio = await _portfolioProfileRepository.PortfolioExists(id);
            return isPortfolio;
        }
    }

}

using PortfolioAPI.Models;

namespace PortfolioAPI.Services
{
    public interface IPortfolioProfileService
    {
        Task<IEnumerable<PortfolioProfile>> GetPortfolioProfiles(string username);
        Task<PortfolioProfile> GetPortfolioProfile(int portfolioId);
        Task<PortfolioProfile> CreatePortfolioProfile(PortfolioProfile portfolioProfile);
        Task UpdatePortfolioProfile(int id, PortfolioProfile portfolioProfile);
        Task DeletePortfolioProfile(int portfolioId);
        Task<bool> PortfolioExists(int id);
    }
}

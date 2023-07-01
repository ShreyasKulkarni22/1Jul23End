using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Data;
using PortfolioAPI.Models;

namespace PortfolioAPI.Repository
{
    public class PortfolioProfileRepository : IPortfolioProfileRepository
    {
        private readonly PortfolioProfileDbContext _dbContext;

        public PortfolioProfileRepository(PortfolioProfileDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<PortfolioProfile>> GetPortfolioProfiles(string username)
        {
            var portfolios = await _dbContext.PortfolioProfiles.ToListAsync();
            var pp =portfolios.Where(p=>p.UserName == username);
            return pp;
        }

        public async Task<PortfolioProfile> GetPortfolioProfile(int portfolioId)
        {
            var portfolio=await _dbContext.PortfolioProfiles.FindAsync(portfolioId);
            return portfolio;
        }

        public async Task<PortfolioProfile> CreatePortfolioProfile(PortfolioProfile portfolioProfile)
        {
            var pp=await _dbContext.PortfolioProfiles.AddAsync(portfolioProfile);
            await _dbContext.SaveChangesAsync();
            return pp.Entity;
        }

        public async Task UpdatePortfolioProfile(int id,PortfolioProfile portfolioProfile)
        {
            var portfolio = await _dbContext.PortfolioProfiles.FindAsync(id);
            if (portfolio != null)
            {
                portfolio.PortfolioName = portfolioProfile.PortfolioName;
                portfolio.UserName=portfolioProfile.UserName;
            }
            //_dbContext.Entry(portfolioProfile).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeletePortfolioProfile(int portfolioId)
        {
            var portfolioProfile = await _dbContext.PortfolioProfiles.FindAsync(portfolioId);
            if (portfolioProfile != null)
            {
                _dbContext.PortfolioProfiles.Remove(portfolioProfile);
                await _dbContext.SaveChangesAsync();
            }
        }

        public async Task<bool> PortfolioExists(int portfolioId)
        {
            var isPortfolio = await _dbContext.PortfolioProfiles.FindAsync(portfolioId);
            if (isPortfolio == null)
            {
                return false;
            }
            return true;
        }
    }
}

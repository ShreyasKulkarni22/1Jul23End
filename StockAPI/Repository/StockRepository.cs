using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Models;
using StockAPI.Data;

namespace StockAPI.Repository
{
    public class StockRepository : IStockRepository
    {
        private readonly StockAPIDbContext _dbContext;

        public StockRepository(StockAPIDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Stock> CreateStock(Stock investment)
        {
            var newstock=await _dbContext.Stocks.AddAsync(investment);
            await _dbContext.SaveChangesAsync();
            return newstock.Entity;
        }

        public async Task DeleteStock(int stockId,int portfolioId)
        {
            var stock =await _dbContext.Stocks.Where(s=>s.Stockid==stockId).Where(s=>s.PortfolioId==portfolioId).FirstOrDefaultAsync();
            if (stock != null)
            {
                _dbContext.Stocks.Remove(stock);
                await _dbContext.SaveChangesAsync();
            }
        }

        public async Task<Stock> GetStock(int stockId, int portfolioId)
        {
            var stock =await _dbContext.Stocks.Where(s => s.Stockid == stockId).Where(s => s.PortfolioId == portfolioId).FirstOrDefaultAsync();
            return stock;
        }

        public async Task<IEnumerable<Stock>> GetStocks(int portfolioId)
        {
            var stocks = await _dbContext.Stocks.Where(s=>s.PortfolioId==portfolioId).ToListAsync();
            return stocks;
        }

        public async Task UpdateStock(int stockId,Stock investment)
        {
            var stock = await _dbContext.Stocks.FindAsync(stockId);
            if (stock != null)
            {
                stock.StockName = investment.StockName;
                stock.StockPrice= investment.StockPrice;
                stock.StockQuantity= investment.StockQuantity;
            }
                await _dbContext.SaveChangesAsync();
            
        }
    }
}

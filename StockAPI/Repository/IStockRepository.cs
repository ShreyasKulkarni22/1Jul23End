using PortfolioAPI.Models;

namespace StockAPI.Repository
{
    public interface IStockRepository
    {
        Task<IEnumerable<Stock>> GetStocks(int portfolioId);
        Task<Stock> GetStock(int stockId, int portfolioId);
        Task<Stock> CreateStock(Stock investment);
        Task UpdateStock(int stockId,Stock investment);
        Task DeleteStock(int stockId, int portfolioId);
    }
}

using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Models;
using System.Collections.Generic;

namespace StockAPI.Data
{
    public class StockAPIDbContext:DbContext
    {
        public StockAPIDbContext(DbContextOptions<StockAPIDbContext> options) : base(options)
        {
        }

        public DbSet<Stock> Stocks { get; set; }
        //public DbSet<Investment> Investments { get; set; }
        //public DbSet<PurchaseRecord> PurchaseRecords { get; set; }
    }
}

using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Models;

namespace PortfolioAPI.Data
{
    public class PortfolioProfileDbContext : DbContext
    {
        public PortfolioProfileDbContext(DbContextOptions<PortfolioProfileDbContext> options) : base(options)
        {
        }

        public DbSet<PortfolioProfile> PortfolioProfiles { get; set; }
        //public DbSet<Investment> Investments { get; set; }
        //public DbSet<PurchaseRecord> PurchaseRecords { get; set; }
    }
}

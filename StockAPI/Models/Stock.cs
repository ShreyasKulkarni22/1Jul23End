using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PortfolioAPI.Models
{
    public class Stock
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Stockid { get; set; }
        public DateTime PurchaseDate { get; set; }
        public string StockSymbol { get; set; }
        public string StockName { get; set; }
        public double StockPrice { get; set;}
        public int StockQuantity { get; set;}

        public int PortfolioId { get; set; }
        //public double Totalvalue { get; set;}
        //[ForeignKey("Recordid")]
        //public ICollection<PurchaseRecord> PurchaseRecords { get; set;}
    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PortfolioAPI.Models
{
    public class Investment
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Stockid { get; set; }
        public string Stockname { get; set; }
        public double Stockprice { get; set;}
        public int Stockquantity { get; set;}
        public double Totalvalue { get; set;}

        //[ForeignKey("Recordid")]
        //public ICollection<PurchaseRecord> PurchaseRecords { get; set;}

    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PortfolioAPI.Models
{
    public class PortfolioProfile
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int PortfolioId { get; set; }
        public string UserName { get; set; }
        public string PortfolioName { get; set; }
        //public ICollection<Investment> Investments { get; set; }
    }
}

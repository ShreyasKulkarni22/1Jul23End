using System.Runtime.Serialization;

namespace StockAPI.Exceptions
{
    [Serializable]
    internal class PortfolioDoesNotExist : Exception
    {
        public PortfolioDoesNotExist()
        {
        }

        public PortfolioDoesNotExist(string? message) : base(message)
        {
        }

        public PortfolioDoesNotExist(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected PortfolioDoesNotExist(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
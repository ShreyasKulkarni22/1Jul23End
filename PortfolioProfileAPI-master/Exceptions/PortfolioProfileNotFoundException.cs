using System.Runtime.Serialization;

namespace PortfolioAPI.Exceptions
{
    [Serializable]
    internal class PortfolioProfileNotFoundException : Exception
    {
        public PortfolioProfileNotFoundException()
        {
        }

        public PortfolioProfileNotFoundException(string? message) : base(message)
        {
        }

        public PortfolioProfileNotFoundException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected PortfolioProfileNotFoundException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}
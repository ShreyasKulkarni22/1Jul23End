using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PortfolioAPI.Exceptions;
using PortfolioAPI.Models;
using PortfolioAPI.Services;

namespace PortfolioAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PortfolioProfileController : ControllerBase
    {
        private readonly IPortfolioProfileService _portfolioProfileService;

        public PortfolioProfileController(IPortfolioProfileService portfolioProfileService)
        {
            _portfolioProfileService = portfolioProfileService;
        }

        [HttpGet("Portfolios")]
        public async Task<ActionResult<IEnumerable<PortfolioProfile>>> GetPortfolioProfiles(string username)
        {
            try
            {
                var portfolioProfiles = await _portfolioProfileService.GetPortfolioProfiles(username);
                return Ok(portfolioProfiles);
            }
            catch (PortfolioProfileNotFoundException ex)
            {

                return NotFound(ex.Message);
            }
        }

        [HttpGet("Portfolios/{id}")]
        public async Task<ActionResult<PortfolioProfile>> GetPortfolioProfile(int id)
        {
            try
            {
                var portfolioProfile = await _portfolioProfileService.GetPortfolioProfile(id);
                
                return Ok(portfolioProfile);
            }
            catch (PortfolioProfileNotFoundException ex)
            {

                return NotFound(ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<PortfolioProfile>> CreatePortfolioProfile(PortfolioProfile portfolioProfile)
        {
            try
            {
                await _portfolioProfileService.CreatePortfolioProfile(portfolioProfile);
                return CreatedAtAction(nameof(GetPortfolioProfile), new { id = portfolioProfile.PortfolioId }, portfolioProfile);
            }
            catch(UserDoesNotExistException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {

                return NotFound(ex.Message);
            }
        }

        [HttpPut("Portfolios/{id}")]
        public async Task<IActionResult> UpdatePortfolioProfile(int id, PortfolioProfile portfolioProfile)
        {
            if (id != portfolioProfile.PortfolioId)
            {
                return BadRequest();
            }
            await _portfolioProfileService.UpdatePortfolioProfile(id, portfolioProfile);
            return NoContent();
        }

        [HttpDelete("Portfolios/{id}")]
        public async Task<IActionResult> DeletePortfolioProfile(int id)
        {
            await _portfolioProfileService.DeletePortfolioProfile(id);
            return NoContent();
        }

        [HttpGet("Portfolios/{id}/exists")]
        public async Task<bool> PortfolioExists(int id)
        {
            var isPortfolio =await _portfolioProfileService.PortfolioExists(id);
            return isPortfolio;
        }
    }
}

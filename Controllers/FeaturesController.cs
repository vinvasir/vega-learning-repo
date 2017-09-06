using Microsoft.AspNetCore.Mvc;
using vega.Persistence;

namespace vega.Controllers
{
    public class FeaturesController : Controller
    {
        private readonly VegaDbContext context;

        public FeaturesController(VegaDbContext context)
        {
            this.context = context;
        }

        [HttpGet("/api/features")]
        public async Task<IEnumerable<FeatureResource>> GetFeatures()
        {

        }
    }
}
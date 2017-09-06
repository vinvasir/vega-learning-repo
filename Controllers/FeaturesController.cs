using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vega.Controllers.Resources;
using vega.Models;
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
            var features = await context.Features.ToListAsync();

            return Mapper.Map<List<Feature>, List<FeatureResource>>(features);
        }
    }
}
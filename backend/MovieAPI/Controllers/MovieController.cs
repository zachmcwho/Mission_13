using Microsoft.AspNetCore.Mvc;
using MovieAPI.Data;

namespace MovieAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : ControllerBase
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temp) {
            context = temp;
        }
        public IEnumerable<Movies> Get()
        {
            return context.Movies.ToArray();
        }

        //public IEnumerable<Movies> Post()
        //{

        //}
    }
}

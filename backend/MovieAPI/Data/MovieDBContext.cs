using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace MovieAPI.Data
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) { }

        public DbSet<Movies> Movies { get; set; }

    }
}
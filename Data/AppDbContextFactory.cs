using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Qaryati.Data
{
    public class AppDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
    {
        public AppDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();

             optionsBuilder.UseSqlServer("Server=db50768.public.databaseasp.net;Database=db50768;User Id=db50768;Password=i=5X6H?gd@8P;Encrypt=False;MultipleActiveResultSets=True;");
            return new AppDbContext(optionsBuilder.Options);
        }
    }
}
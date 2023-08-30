using Microsoft.EntityFrameworkCore;
namespace EvoSystems.Models
  
{
    public class Context : DbContext
    {
        

        public DbSet<Departamento> Departamentos { get; set; }
        public DbSet<Funcionario> Funcionarios { get; set; }

        public Context(DbContextOptions<Context> options) : base(options) { }
    }
}

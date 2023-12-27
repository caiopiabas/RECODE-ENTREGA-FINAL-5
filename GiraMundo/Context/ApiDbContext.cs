using GiraMundo.Models;
using Microsoft.EntityFrameworkCore;

namespace GiraMundo.Context
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
        {
        }

        public DbSet<Pacote> Pacotes { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pedido>()
                .HasOne(p => p.Usuario)
                .WithMany(u => u.Pedidos);

            modelBuilder.Entity<Pedido>()
                .HasOne(p => p.Pacote)
                .WithMany(pa => pa.Pedidos);

            base.OnModelCreating(modelBuilder);
        }
    }
}
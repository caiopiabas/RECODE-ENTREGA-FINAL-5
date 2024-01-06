using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GiraMundo.Models
{
    [Table("Usuarios")]
    public class Usuario
    {
        public Usuario()
        {
            Pedidos = new Collection<Pedido>();
        }

        [Key]
        public int UsuarioId { get; set; }

        [Required(ErrorMessage = "O campo Nome é obrigatório")]
        [StringLength(80)]
        public string? Nome { get; set; }

        [Required(ErrorMessage = "O campo Email é obrigatório")]
        [StringLength(50)]
        public string? Email { get; set; }

        public ICollection<Pedido> Pedidos { get; set; }
    }
}
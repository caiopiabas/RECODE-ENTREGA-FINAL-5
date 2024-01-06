using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GiraMundo.Models
{
    [Table("Pacotes")]
    public class Pacote
    {
        public Pacote()
        {
            Pedidos = new Collection<Pedido>();
        }

        [Key]
        public int PacoteId { get; set; }

        [Required(ErrorMessage = "O Nome do Pacote é obrigatório")]
        [StringLength(80)]
        public string? NomePacote { get; set; }

        [Required(ErrorMessage = "A Descrição é obrigatória")]
        [StringLength(300)]
        public string? Descricao { get; set; }

        [Required(ErrorMessage = "O Preço é obrigatório")]
        [Column(TypeName = "decimal(10,2)")]
        public decimal? Preco { get; set; }

        [Required(ErrorMessage = "A Duração é obrigatória")]
        public int? Duracao { get; set; }

        public ICollection<Pedido> Pedidos { get; set; }
    }
}
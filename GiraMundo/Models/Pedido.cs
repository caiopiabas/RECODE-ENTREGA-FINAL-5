using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace GiraMundo.Models
{
    [Table("Pedidos")]
    public class Pedido
    {
        [Key]
        public int PedidoId { get; set; }

        [Required(ErrorMessage = "A Data do Pedido é obrigatória")]
        public DateTime DataPedido { get; set; }

        // Chave estrangeira para Usuario
        public int UsuarioId { get; set; }

        [JsonIgnore]
        public Usuario? Usuario { get; set; }

        // Chave estrangeira para Pacote
        public int PacoteId { get; set; }

        [JsonIgnore]
        public Pacote? Pacote { get; set; }
    }
}
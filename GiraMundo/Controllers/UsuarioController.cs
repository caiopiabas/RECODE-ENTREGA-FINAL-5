using GiraMundo.Models;
using Microsoft.AspNetCore.Mvc;

namespace GiraMundo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<Usuario>> BuscarTodosUsuarios()
        {
            return Ok();
        }
    }
}
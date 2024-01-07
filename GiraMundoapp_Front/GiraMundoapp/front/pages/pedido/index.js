import React from "react";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function pedido() {
  const [pedidos, setpedidos] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7058/api/Pedidos")
      .then((response) => {
        setpedidos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de pedidos:", error);
      });
  }, []);

  const formatMoney = (price) => {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <>
      <Head>
        <title>Pedidos - GiraMundo</title>
      </Head>
      <main>
        <section className="container py-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="card border-0 shadow">
                <div className="card-header p-4 border-0 d-flex my-auto">
                  <i className="bi bi-cart-fill fs-3 me-2 iconsStyle"></i>
                  <h4>Pedidos</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-borderless">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Data Pedido</th>
                          <th>#UsuarioId</th>
                          <th>#PacoteId</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pedidos.map((pedido) => (
                          <tr key={pedido.pedidoId}>
                            <td>{pedido.pedidoId}</td>
                            <td>{pedido.dataPedido}</td>
                            <td>{pedido.usuarioId}</td>
                            <td>{pedido.pacoteId}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

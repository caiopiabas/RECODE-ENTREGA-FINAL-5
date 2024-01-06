import React from "react";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function usuario() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7058/api/Usuarios")
      .then((response) => {
        setClientes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de Usuarios:", error);
      });
  }, []);

  const invisiblePassword = (pass) => {
    return '*'.repeat(pass.length);
  };

  return (
    <>
      <Head>
        <title>Usuarios - GiraMundo</title>
      </Head>
      <main>
        <section className="container py-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="card border-0 shadow">
                <div className="card-header p-4 border-0 d-flex my-auto">
                  <i className="bi bi-people-fill fs-3 me-2 iconsStyle"></i>
                  <h4>Usuarios</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-borderless">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Nome</th>
                          <th>E-mail</th>

                        </tr>
                      </thead>
                      <tbody>
                        {usuarios.map((usuario) => (
                          <tr key={usuario.UsuarioId}>
                            <td>{usuario.UsuarioId}</td>
                            <td>{usuario.Nome}</td>
                            <td>{usuario.Email}</td>
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

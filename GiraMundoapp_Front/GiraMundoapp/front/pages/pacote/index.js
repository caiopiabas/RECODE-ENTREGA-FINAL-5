import React from "react";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Pacote() {
  const [pacotes, setPacotes] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7058/api/Pacotes")
      .then((response) => {
        setPacotes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de pacotes:", error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Pacotes - GiraMundo</title>
      </Head>
      <main>
        <section className="container py-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="card border-0 shadow">
                <div className="card-header p-4 border-0 d-flex my-auto">
                  <i className="bi  bi-airplane-fill fs-3 me-2 iconsStyle"></i>
                  <h4>Pacotes</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-borderless">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Nome Pacote</th>
                          <th>Descrição</th>
                          <th>Preço</th>
                          <th>Duração</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pacotes.map((pacote) => (
                          <tr key={pacote.PacoteId}>
                            <td>{pacote.NomePacote}</td>
                            <td>{pacote.Descricao}</td>
                            <td>{pacote.Preco}</td>
                            <td>{pacote.Duracao}</td>
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

import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Promo.module.css";
import Link from "next/link";

export default function Promocoes() {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7058/api/Pacotes")
      .then((response) => {
        setDestinos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao listar destinos:", error);
      });
  }, []);
  
  return (
    <>
      <Head>
        <title>Destinos - GiraMundo</title>
      </Head>
      <main>
        

        <section className="container py-5">
          <div className="mb-5">
            <h2>Pacotes Exclusivos</h2>
            <hr></hr>
          </div>

          <div className="row">
            {destinos.map((destino) => (
              <div className="col-lg-3 mb-2">
                <div className={`card border-0 shadow mb-4 rounded-4 `}>
                  <img src="img/frança.jpg"alt="Imagem do Destino" className="card-img-top rounded-top-4 shadow" style={{ height: "180px", objectFit: "cover" }} />
                  <div className="card-body px-4">
                    <h4 className="card-title pb-2">teste</h4>
                    <div className="card-text d-flex align-items-center">
                      <i className="bi bi-check-circle iconsStyle me-2 mt-1"></i>
                      <span className="card-text">2 Pessoas</span>
                    </div>

                    <div className="card-text d-flex align-items-center">
                      <i className="bi bi-check-circle iconsStyle me-2 mt-1"></i>
                      <span className="card-text">Café da Manhã</span>
                    </div>

                    <div className="card-text">
                      <span className="d-flex fs-4 fw-semibold">10.000</span>
                      De: <span className="text-decoration-line-through">9.999 </span>
                    </div>

                    <Link className="btn btn-primary mt-4" href={"/pedido"}>
                      Comprar
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

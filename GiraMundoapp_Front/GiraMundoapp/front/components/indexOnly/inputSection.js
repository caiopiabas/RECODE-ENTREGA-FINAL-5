import React from "react";
import styles from "../../styles/Home.module.css";

export default function InputSection() {
  return (
    <>
      <section className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h2>
              Vai ficar fora dessa ? Realize seu sonho com a <span className="text-muted">GiraMundo.</span>
            </h2>
            <p className="lead">
            Seja um explorador!<br />
              Nossos destinos oferecem a promessa de novas culturas, paisagens e memórias inesquecíveis
            </p>
          </div>
          <div className="col-md-5 offset-md-1">
            <form>
              <h5>Mural</h5>
              <p>"A realização de uma viagem é <br />
               a concretização de um sonho, é o momento em que o imaginário se torna palpável, e a jornada se transforma em experiência." - Caio Vinicius</p>
              
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

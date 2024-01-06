import React from "react";

export default function Benefits() {
  return (
    <>
      <section className="my-4">
        <div className="container-fluid">
          <div className="container py-3">
            <div className="row text-center">
              <div className="col-md-3">
                <i className="bi bi-box2-heart bi-icon fs-1"></i>
                <h6>Pacotes Exclusivos</h6>
                <p>Explore destinos exclusivos com nossos pacotes feitos sob medida para transformar suas viagens em experiências inesquecíveis.</p>
              </div>
              <div className="col-md-3">
                <i className="bi bi-hand-index-thumb bi-icon fs-1"></i>
                <h6>Roteiros Customizados</h6>
                <p>Crie memórias únicas com nossos roteiros personalizados, adaptados aos seus desejos e preferências. Sua jornada, suas regras</p>
              </div>
              <div className="col-md-3">
                <i className="bi bi-person-wheelchair bi-icon fs-1"></i>
                <h6>Pacotes Personalizados</h6>
                <p> Nossos pacotes são personalizados para celebrar a diversidade, garantindo experiências feitas sob medida para cada viajante</p>
              </div>
              <div className="col-md-3">
                <i className="bi bi-person-circle bi-icon fs-1"></i>
                <h6>Programa de Fidelidade</h6>
                <p>Viaje mais, ganhe mais! Nosso programa de recompensas é nossa maneira de agradecer voce que nos dá a preferencia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

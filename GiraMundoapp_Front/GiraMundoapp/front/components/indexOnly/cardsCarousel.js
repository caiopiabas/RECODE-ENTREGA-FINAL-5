import React from "react";

export default function cardsCarousel() {
  return (
    <>
      <section className="py-3">
        <div className="container">
          <hr />
          <div className="row py-4">
            <div className="col-md-7">
              <h2 className="pt-5">
              Conectando você ao mundo .
              </h2>
              <p className="lead">Não colecione coisas, colecione momentos. Comece sua coleção de memórias conosco!</p>
            </div>
            <div className="col-md-5">
              <div id="mycarousel2" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner shadow rounded-4">
                  <div className="carousel-item active">
                    <div className="card rounded-4">
                      <img src="img/barcelona.jpg" className="card-img-top" height="300" alt="barcelona" />
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-geo-alt-fill me-1 fs-5 pb-2"></i>
                          <h5 className="card-title">Barcelona</h5>
                        </div>
                        <p className="card-text text-muted">Barcelona, onde a arquitetura ousada dança com a tradição, as praias ensolaradas abraçam a história, e cada esquina conta uma história vibrante de cultura e paixão.</p>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="card rounded-4">
                      <img src="img/lisboa1.jpg" className="card-img-top" height="300" alt="bonito" />
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-geo-alt-fill me-1 fs-5 pb-2"></i>
                          <h5 className="card-title">Bonito</h5>
                        </div>
                        <p className="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, maiores! Laboriosam laborum amet voluptate pariaturtem.</p>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="card rounded-4">
                      <img src="img/natal.jpg" className="card-img-top" height="300" alt="maragogi" />
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-geo-alt-fill me-1 fs-5 pb-2"></i>
                          <h5 className="card-title">Maragogi</h5>
                        </div>
                        <p className="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, maiores! Laboriosam laborum amet voluptate pariaturtem.</p>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="card rounded-4">
                      <img src="img/dysney.png" className="card-img-top" height="300" alt="gramado" />
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-geo-alt-fill me-1 fs-5 pb-2"></i>
                          <h5 className="card-title">Disney</h5>
                        </div>
                        <p className="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, maiores! Laboriosam laborum amet voluptate pariaturtem.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mycarousel2" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mycarousel2" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="visually-hidden">Proxima</span>
                </button>
              </div>
            </div>
          </div>
          <hr />

          <div className="row py-4">
            <div className="col-md-7 order-md-5">
              <h2 className="pt-5">
              Cidades Históricas Encantadoras
              </h2>
              <p className="lead">Descubra a essência de destinos repletos de história, arquitetura magnífica e experiências culturais inesquecíveis. De encantadoras ruas a monumentos emblemáticos, cada cidade turística é um capítulo fascinante a ser explorado.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner shadow rounded-4">
                  <div className="carousel-item active">
                    <div className="card rounded-4">
                      <img src="img/frança.jpg" className="card-img-top" height="300" alt="paris" />
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-geo-alt-fill me-1 fs-5 pb-2"></i>
                          <h5 className="card-title">Paris</h5>
                        </div>
                        <p className="card-text text-muted">Explorando o encanto de Paris: Onde a arquitetura icônica encontra a cultura apaixonante. Descubra a Cidade Luz e deixe-se envolver pela magia das ruas parisienses</p>
                      </div>
                    </div>
                  </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#mycarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#mycarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import Head from "next/head";

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato | GiraMundo</title>
      </Head>

      <main className="Contact">
        <section>
          <div className="container shadow">
            <div className="row">
              <div className="col-md-5 p-5 order-sm-first order-last bg-white text-dark">
                <h2>Nossos Contatos</h2>
                <p className="fonte">Estamos aqui para ouvir você! Entre em contato e compartilhe suas ideias, dúvidas ou sugestões.</p>
                <div className="d-flex mt-3 align-items-center">
                  <i className="bi bi-envelope bi-style fs-3"></i>
                  <p className="mt-3 ms-2 fonte">giramundo@viagens.com</p>
                </div>
                <div className="d-flex mt-2 align-items-center">
                  <i className="bi bi-telephone bi-style fs-3"></i>
                  <p className="mt-3 ms-2 fonte"> +55 (21)11111-1111</p>
                </div>
                <div className="d-flex mt-2 align-items-center">
                  <i className="bi bi-instagram bi-style fs-3"></i>
                  <p className="mt-3 ms-2 fonte">@giramundo</p>
                </div>
                <div className="d-flex mt-2 align-items-center">
                  <i className="bi bi-facebook bi-style fs-3"></i>
                  <p className="mt-3 ms-2 fonte">@giramundo</p>
                </div>
              </div>

              <div className="col-md-7 bg-dark p-5 text-white">
                <h2>Contate-nos</h2>
                <form method="post" className="row g-3  mt-4">
                  <div className="col-md-6">
                    <label htmlFor="nome" className="form-label">
                      Nome
                    </label>
                    <input type="text" className="form-control" id="nome" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="sobrenome" className="form-label">
                      Sobrenome
                    </label>
                    <input type="text" className="form-control" id="sobrenome" required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="assunto" className="form-label">
                      Assunto
                    </label>
                    <input type="text" className="form-control" id="assunto" />
                  </div>
                  <div className="col-mb-3">
                    <label htmlFor="mensagem" className="form-label">
                      Mensagem
                    </label>
                    <textarea className="form-control" id="mensagem" rows="3"></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary  mt-3">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

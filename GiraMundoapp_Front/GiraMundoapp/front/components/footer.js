import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark">
  <div className="container pt-2 text-white text-center d-flex flex-column flex-sm-row justify-content-between align-items-center">
    <p>&copy; Recode 2023 - Atividade numero 6 / Squad 28 Turma: 3 - Aluno: Caio Vinicius. Todos os direitos reservados.</p>
    <div className="d-flex pb-3">
      <a href="https://github.com/caiopiabas" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-github fs-6 pe-2 iconSocial"></i>
      </a>
      <a href="https://www.linkedin.com/in/caio-vinicius-devfull/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-linkedin fs-6 pe-2 iconSocial"></i>
      </a>
    </div>
  </div>
</footer>
  );
}

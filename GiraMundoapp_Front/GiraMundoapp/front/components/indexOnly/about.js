import React from "react";
import styles from "../../styles/Home.module.css";

export default function About() {
  return (
    <>
      <section className={`my-5 rounded-3 ${styles.bgHome}`}>
        <div className="container py-5 text-center">
          <i className="bi bi-globe2 fs-1"></i>
          <h4>Inovadora</h4>
          <p>
           A GiraMundo destaca a ênfase da empresa em criar soluções originais e pioneiras.
          </p>
        </div>
      </section>
    </>
  );
}

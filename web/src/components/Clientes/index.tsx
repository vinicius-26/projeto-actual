import React from 'react';
import styles from './styles.module.css'

const Clientes: React.FC = () => {
    return(
      <div id="clientes" className={styles.clientes}>
        <h3>Nossos Clientes</h3>

        <div className={styles.gradient}>  </div>

        <div className={styles.gridImages}>
          <div className={styles.cliente1}>
            <img src="img/logo.villa.jpg" alt="" />
          </div>

          <div className={styles.cliente2}>
            <img src="img/cafeRaphaelli.png" alt="" />
          </div>

          <div className={styles.cliente3}>
            <a href="https://www.carmomaq.com.br/" target="_blank"> <img src="img/logo-carmomaq-01.png" alt="" /></a>
          </div>

          <div className={styles.cliente4}>
            <a href="http://www.montealegre.com.br/pt/" target="_blank"><img src="img/monte-alegre.png" alt="" /></a>
          </div>

          <div className={styles.cliente5}>
            <a href="http://www.terraadorada.com.br/" target='_blank'> <img src="img/terradorada.png" alt="" /></a>
          </div>

          <div className={styles.cliente6}>
            <a href="https://cafesoberano.com.br/" target="_blank"><img src="img/cafe-soberano.png" alt="" /></a>
          </div>

          <div className={styles.cliente7}>
            <a href="https://www.aumacafe.com.br/" target="_blank"><img src="img/auma-cafe.jpg" alt="" /></a>
          </div>

          <div className={styles.cliente8}>
            <a href="http://cafeterradagente.com.br/" target="_blank"><img src="img/terra-da-gente.jpg" alt="" /></a>
          </div>
        </div>
        <div className={styles.gradientInvert}> </div>
      </div>
    )
}

export default Clientes;
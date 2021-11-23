import React from 'react';
import styles from './styles.module.css'

const Clientes: React.FC = () => {
    return(
      <div id="clientes" className={styles.clientes}>
        <h3>Nossos Clientes</h3>

        <div className={styles.gradient}>  </div>

        <div className={styles.gridImages}>
            <div className={styles.clientes2}>
              <img src="img/clientes/cafeRaphaelli.png" alt="" />
            </div>
            <a href="https://www.carmomaq.com.br/" target="_blank"> <img src="img/clientes/logo-carmomaq-01.png" alt="" /></a>

            <a href="https://www.nestle.com.br/" target="_blank"> <img src="img/clientes/nestle.png" alt="" /></a>

            <a href="https://cafetialuiza.com.br/" target="_blank"> <img src="img/clientes/logo_cafe_tia_luiza.png" alt="" /></a>

            <a href="https://www.olamgroup.com/" target="_blank"><img src="img/clientes/olam.png" alt="" /></a>

            <a href="https://coopfam.com.br/" target="_blank"> <img src="img/clientes/coopfam.png" alt="" /></a>

            <a href="https://astecahinomoto.com.br/pb/" target="_blank"><img src="img/clientes/logo_asteca.png" alt="" /></a>

            <a href="https://bourboncoffees.com.br/" target="_blank"> <img src="img/clientes/logo-header_bournon.png" alt="" /></a>

            <a href="https://hatsuiacoffee.com.br/" target="_blank"> <img src="img/clientes/hatsuia.jpg" alt="" /></a>

            <a href="https://stocklerltda.com.br/" target="_blank"> <img src="img/clientes/nkg-stockler.svg" alt="" /></a>

            <a href="https://www.cooxupe.com.br/" target="_blank"><img src="img/clientes/cooxupe.png" alt="" /></a>

            <a href="https://www.carmocoffees.com.br/?lang=pt-br" target="_blank"><img src="img/clientes/carmocoffees.png" alt="" /></a>

            <a href="https://www.cafeesporte.com.br/" target="_blank"><img src="img/clientes/cafe-esporte.png" alt="" /></a>

            <a href="https://www.cafe35.com.br/" target="_blank"><img src="img/clientes/cafe-35.png" alt="" /></a>

            <a href="http://www.montealegre.com.br/pt/" target="_blank"><img src="img/clientes/monte-alegre.png" alt="" /></a>

            <a href="https://goo.gl/maps/fVF3xofLMkjJfm8k8" target="_blank"><img src="img/clientes/logo.villa.jpg" alt="" /></a>

            <a href="http://www.terraadorada.com.br/" target='_blank'> <img src="img/clientes/terradorada.png" alt="" /></a>

            <a href="https://cafesoberano.com.br/" target="_blank"><img src="img/clientes/cafe-soberano.png" alt="" /></a>

            <a href="https://www.aumacafe.com.br/" target="_blank"><img src="img/clientes/auma-cafe.jpg" alt="" /></a>

            <a href="https://www.tabajara.ind.br/cafetabajara" target="_blank"><img src="img/clientes/LOGO-TABAJARA-01.png" alt="" /></a>

            <a href="http://cafeterradagente.com.br/" target="_blank"><img src="img/clientes/cafe-terra-da-gente.jpg" alt="" /></a>

            <a href="https://www.lukealimentos.com.br/luke/" target="_blank"><img src="img/clientes/luke.png" alt="" /></a>

            <a href="http://sanjeralimentos.com.br/" target="_blank"><img src="img/clientes/sanjer.svg" alt="" /></a>

            <a href="https://sucafina.com/" target="_blank"><img src="img/clientes/sucafina-logo-vector.png" alt="" /></a>
        </div>
        <div className={styles.gradientInvert}> </div>
      </div>
    )
}

export default Clientes;
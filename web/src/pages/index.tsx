import Card from '../components/Card'
import Image from 'next/image' 

import styles from './Home.module.css'

import { NavBar } from '../components/NavBar/NavBar';
import Sobre from '../components/Sobre';
import Desenvolvimento from '../components/Desenvolvimento';
import Clientes from '../components/Clientes';
import Remoto from '../components/Remoto';

const Home: React.FC = () => {

  return (
  <div className={styles.container}>
    <div className={styles.content}>

      
      <div className={styles.fadeIn}>
        <div className={styles.sliderContent}>
          <div className={styles.img_1}>
            <img src="img/svg/ativo_2.svg" alt="" />
          </div>

          <div className={styles.img_2}>
            <img src="img/ativo_3.png" alt="a" />
          </div>
        </div>
        
      </div>

        {/* Serviços */} 

        <div id="servicos" className={styles.row}>

          <Card 
            title="Redes Industriais"
            text="Implante soluções de redes industriais seguras, confiáveis e robustas"
            img = "/img/mapa-do-site.png"
          />

          <Card 
            title="Segurança Industrial"
            text="Soluções de segurança da fábrica à empresa"
            img= "/img/prancheta.png"
          />

          <Card 
            title="Soluções de Processo"
            text="Maximizar a produtividade e ajudar a minimizar o risco"
            img= "/img/idea.png"
          />

          <Card 
            title="Soluções de Informação"
            text="Gestão e otimização da produção completa"
            img= "/img/tap.png"
          />

          <Card 
            title="Desenvolvimento de Software"
            text="Sistemas e aplicativos sob medida, totalmente personalizado para a demanda da sua empresa."
            img= "/img/conexao-com-a-nuvem.png"
          />
        </div>

        <div id="about" className={styles.about}>
          <Sobre />
        </div>

        <div id="produtos" className={styles.linha}>
        </div>

        <div className={styles.dev}>
          <Desenvolvimento />
        </div>

        <div className={styles.remoto}>
          <Remoto/>
        </div>

        <div className={styles.clientes}>
          <Clientes />
        </div>
      

      <div className={styles.painel}>
        <img src="img/ativo_19.png" alt="" />
      </div>
    </div>
  </div>
  )
}

export default Home;

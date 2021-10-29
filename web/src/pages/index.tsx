import Card from '../components/Card'
import Image from 'next/image'

import imgNuvem from '../public/img/conexao-com-a-nuvem.png';
import imgTablet from '../public/img/tap.png';
import imgIdea from '../public/img/idea.png';
import imgPrancheta from '../public/img/prancheta.png';
import imgRede from '../public/img/mapa-do-site.png';

const Nuvem = imgNuvem;

import styles from './Home.module.css'
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gradient}>
      <br />
      <br />

      </div>

      <div className={styles.videoContent}>
        <p> 
          Utilizamos tecnologias de alta performance para guiar indústrias a
          processos otimizados e, oferecemos suporte no desenvolvimento e
          integração de sistemas de automação, com equipamentos inteligentes e uma equipe 
          formada por engenheiros constantemente treinados e atualizados.
          <br /> <br />
          <span>
          Nosso compromisso é superar expectativas, entender as necessidades de nossos parceiros e oferecer soluções técnicas e comerciais
          adequadas com preços competitivos. 
        </span>
        </p>

        
      </div>

      <div className={styles.gradientInvert}>
        <br />
        <br />
      </div>

    {/* Serviços */}
      <div className={styles.row}>
        <Card 
          title="Redes Industriais"
          text="Implante soluções de redes industriais seguras, confiáveis e robustas"
          img = "https://cdn-icons.flaticon.com/png/512/856/premium/856480.png?token=exp=1635439365~hmac=5efd14674366b69276ea830eaf7e3a8d"
        />

        <Card 
          title="Segurança Industrial"
          text="Soluções de segurança da fábrica à empresa"
          img= "https://cdn-icons-png.flaticon.com/512/73/73798.png"
        />

        <Card 
          title="Soluções de Processo"
          text="Maximizar a produtividade e ajudar a minimizar o risco"
          img= "https://cdn-icons.flaticon.com/png/512/3234/premium/3234971.png?token=exp=1635439927~hmac=b805af1ecb64250abc9c5ee498d60520"
        />

        <Card 
          title="Soluções de Informação"
          text="Gestão e otimização da produção completa"
          img= "https://cdn-icons-png.flaticon.com/512/4403/4403557.png"
        />

        <Card 
          title="Desenvolvimento de Software"
          text="Sistemas e aplicativos sob medida, totalmente personalizado para a demanda da sua empresa."
          img= "https://cdn-icons.flaticon.com/png/512/4759/premium/4759904.png?token=exp=1635439967~hmac=d60e124b06e3834bdbc518662f49ae92"
        />
      </div>

      <div className={styles.white}>
        <br /><br />
      </div>

      <div className={styles.footer}>
        <Footer/>
      </div>
    </div>
  )
}

export default Home

import Card from '../components/Card'
import Image from 'next/image' 

import styles from './Home.module.css'
import Footer from '../components/Footer';
import { NavBar } from '../components/NavBar/NavBar';

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
          <div className={styles.txt}>
            <h2>Quem somos</h2>
            <h3>Somos especializados em montagem de painéis de baixa, média tensão e automação.</h3>
            <span>Montagem de Painéis</span>

            <p>Especializados no desenvolvimento de projetos e montagem de quadros
            elétricos, aplicamos conhecimento técnico para criar soluções que atendam a necessidade da sua indústria, fazenda e armazéns seja ela de baixa,
            média tensão e automação. 
            </p>
            <p>Com equipe qualificada, baixo investimento e seguindo rigorosamente as
            normas de segurança, a qualidade é um dos nossos diferenciais: cumprimos normas rigorosas de clientes exigentes.
            </p>

            <span>Automação</span>
            <p>Próprios para o uso industrial, os painéis de automação são compostos
            por CLPs de pequeno, médio ou grande porte, IOs remotas e IHMs, que se
            comunicam com diversas Redes de Comunicação Industrial, conforme o
            padrão de cada cliente.
            </p>
            <p>Utilizamos tecnologias de alta performance para guiar indústrias a processos otimizados e, oferecemos suporte no desenvolvimento e integração de sistemas de automação, com equipamentos inteligentes e uma
            equipe formada por engenheiros constantemente treinados
            </p>

            <h2>Experiência</h2>
            <p>Com mais de 10 anos de reconhecimento no mercado, somos especializados na distribuição de produtos de automação industrial, instrumentação, materiais elétricos e montagem de painéis. Contamos com uma
            equipe comprometida com excelência e qualidade. Conte conosco, você
            encontra a solução e o suporte necessário para dar o próximo passo na
            sua indústria.
            </p>
            
          </div>

          <div className={styles.imgAbout}>
            <img src="img/ativo_1.png" alt="" />
          </div>
        </div>

        <div id="produtos" className={styles.linha}>
        </div>

        <div  className={styles.dev}>
          <h3>Desenvolvimento de Software e Aplicativos</h3>
          <div className={styles.imgDev}>
            <img src="img/ativo_7.png" alt="" />
          </div>

          <div className={styles.block}>  
            <div className={styles.imgConnected}>
              <img src="img/wifi.png" alt="" />
            </div>
            <h2>ACTUAL CONNECTED</h2>
            <p>SOLUÇÃO REMOTO</p>
          </div>
        </div>

        <br />

        <div className={styles.Inov}>
          <div className={styles.grid1}>
            <h3>Inovando para um futuro melhor</h3>
            <p>Oferecemos um portfólio completo de produtos e serviços de automação e
            infraestrutura do setor para criar soluções personalizadas que beneficiem
            nossos clientes e o mundo.</p>

            <div className={styles.imgInov}>
              <img src="img/svg/ativo_8.svg" alt="" />
            </div>

            <h3>A DISTÂNCIA NÃO SERÁ MAIS UMA BARREIRA</h3>
            <p>No armazém, empresa ou indústria, o inesperado pode acontecer, e quando
            isso acontece, você precisa de suporte rápido. Com Actual Connected a distância não é mais uma barreira. Tenha o controle e dados de seus equipmanetos
            de onde estiver na palma de sua mão.</p>
          </div>

          <div className={styles.grid2}>
            <div className={styles.celular}>
              <img src="img/ativo_9.png" alt="" />
            </div>
          </div>
        </div>

        <div className={styles.empresa}>
          <img src="img/ativo_10.png" alt="" />
        </div>

        <div className={styles.txtRemoto}>
          <img src="img/diamond.png" alt="" />
          <h3>ACTUAL CONECTED - SOLUÇÃO REMOTO</h3>
          <p>Seu armazém, indústria ou empresa conectada, pode trazer ainda mais eficiência para sua operação através de nossas tecnologias de automação.</p>
          <p>Uma solução composta por serviços proativos para tornar as máquinas cada vez mais produtivas, disponíveis e com o menor custo de operação.</p>
          <p>A conexão proativa de pessoas, tecnologias e máquinas</p>
        </div>
      </div>

      <div className={styles.clientes}>
        <h3>Nossos Clientes</h3>
      </div>

      <div className={styles.painel}>
        <img src="img/ativo_19.png" alt="" />
      </div>
    </div>
  )
}

export default Home

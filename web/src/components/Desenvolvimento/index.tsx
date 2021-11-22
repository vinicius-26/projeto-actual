import React from 'react';
import styles from './styles.module.css'

const Desenvolvimento: React.FC = () => {
    return(
      <div className={styles.container}>
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
      </div>
    )
}

export default Desenvolvimento;
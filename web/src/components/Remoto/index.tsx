import React from 'react';
import styles from './styles.module.css'

const Remoto: React.FC = () => {
    return(
      <div className={styles.container}>
        <div className={styles.empresa}>
          {/* <img src="img/ativo_10.png" alt="" /> */}
        </div>

        <div className={styles.txtRemoto}>
          <img src="img/diamond.png" alt="" />
          <h3>ACTUAL CONECTED - SOLUÇÃO REMOTO</h3>
          <p>Seu armazém, indústria ou empresa conectada, pode trazer ainda mais eficiência para sua operação através de nossas tecnologias de automação.</p>
          <p>Uma solução composta por serviços proativos para tornar as máquinas cada vez mais produtivas, disponíveis e com o menor custo de operação.</p>
          <p>A conexão proativa de pessoas, tecnologias e máquinas</p>
        </div>
      </div>
    )
}

export default Remoto;
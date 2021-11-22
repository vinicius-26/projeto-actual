import React from 'react';
import styles from './styles.module.css'

const Sobre: React.FC = () => {
    return(
      <div className={styles.about}>
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
    
    )
}

export default Sobre;
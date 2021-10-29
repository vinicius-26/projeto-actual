import React from 'react';
import styles from './styles.module.css'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'

import imgWhatsapp from '../../public/img/whatsapp.png'


const Footer: React.FC = () => {

    return(
    <div className={styles.container}>
      <main>
          <span>EXPERIÊNCIA</span>

          <span>REDES SOCIAIS</span>

          <span>PRODUTOS</span>

          <span>CONTATOS</span>

        <div className={styles.sobre}>
          
          <strong>Actual</strong>

          <p>Com mais de 10 anos de reconhecimento no mercado, somos especializados na
          distribuição de produtos de automação industrial, instrumentação, materiais elétricos e montagem de painéis. Contamos com uma equipe comprometida com excelência e qualidade. Conte onosco, você encontra a solução e o suporte necessário para
          dar o próximo passo na sua indústria.</p>
        </div>

        <div className={styles.redesSociais}>
          
            
          <div className={styles.icons}>
            <i className="fa fa-facebook-square" aria-hidden="true">  </i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
            
          <div className={styles.text}>
            <a href="https://www.facebook.com/actual.montagem.automacao" target="_blank"><p>Actual Soluções</p></a>
            <a href="https://www.instagram.com/actual.montagem.automacao/" target="_blank"><p>@actual.montagem.automacao</p></a>
          </div>

        </div>

        <div className={styles.produtos}>
          
          <p>Painéis</p>
          <p>Softwares</p>
        </div>

        <div className={styles.contatos}>
          
          <i className="fa fa-home" aria-hidden="true"></i>
          <p>Fabiano</p>
          <p>Reginaldo</p>
        </div>
      </main>

      <div className={styles.copyright}>
        <p>©2021 Copyright: Actual Soluções em Tecnologia. </p> 
        <p>Todos os direitos reservados.</p>
      </div>
    </div>

    
    )
}

export default Footer;
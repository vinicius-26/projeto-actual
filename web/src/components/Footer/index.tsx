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
        <div className={styles.contatos}> 
          <div className={styles.divI}>
            <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
            <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
            <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
          </div>
          
          <div className={styles.divTxt}>
            <p>520, Rachid Elias Sobrinho</p>
            <strong>Esp. Sto. do Pinhal, SP</strong>
            
            <p>actual@gmail.com</p>

            <p>(19) 3661 4941</p>
          </div>


           
            
            
            {/* <a href="https://www.facebook.com/actual.montagem.automacao" target="_blank"><p>Actual Soluções</p></a>
            <a href="https://www.instagram.com/actual.montagem.automacao/" target="_blank"><p>@actual.montagem.automacao</p></a> */}
        </div>

        <div className={styles.sobre}>
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
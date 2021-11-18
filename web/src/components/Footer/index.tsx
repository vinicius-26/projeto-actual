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
          <table>
            <tr>
              <td><i className="fa fa-map-marker fa-lg" aria-hidden="true"></i></td>
              <td><p>520, Rachid Elias Sobrinho </p>
              <span>Esp. Sto. do Pinhal, SP</span>
              </td>
            </tr>

            <tr>
              <td><i className="fa fa-phone fa-lg" aria-hidden="true"></i></td>
              <td><p>(19) 3661 4941</p></td>
            </tr>

            <tr>
              <td><i className="fa fa-envelope fa-lg" aria-hidden="true"></i></td>
              <td><p>actual@gmail.com</p></td>
            </tr>
          </table>
            
            {/* <a href="https://www.facebook.com/actual.montagem.automacao" target="_blank"><p>Actual Soluções</p></a>
            <a href="https://www.instagram.com/actual.montagem.automacao/" target="_blank"><p>@actual.montagem.automacao</p></a> */}
        </div>

        <div className={styles.sobre}>
          <table>
            <tr>
               <td><a href="https://www.facebook.com/actual.montagem.automacao"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></td>    
              <td><a href="https://www.facebook.com/actual.montagem.automacao"><p>Actual Soluções</p></a></td>
            </tr>
            
            <tr>
              <td><a href="https://www.instagram.com/actual.montagem.automacao/"><i className="fa fa-instagram" aria-hidden="true"></i></a></td>
              <td><a href="https://www.instagram.com/actual.montagem.automacao/"><p>@actual.montagem.automacao</p></a></td>
            </tr>
          </table>  
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
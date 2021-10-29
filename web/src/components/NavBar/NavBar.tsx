import styles from './styles.module.css'
import Link from 'next/link';
import { useState } from 'react';

export function NavBar(){

    return(
    <div className={styles.container}>
      <div className={styles.navbar}>

          <h1>ACTUAL</h1>

          <a href="">Home</a>
          <a href="">Projetos</a>
          <a href="">Serviços</a>
          <a href="">Produtos</a>
          <a href="">Clientes</a>
          <a href="">Contatos</a>

          

      </div>
      <Link href="/Login"><button>Login</button></Link>
    </div>
    )
}
import styles from './styles.module.css'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'

export function NavBar(){

    return(
    <div className={styles.container}>
      <div className={styles.navbar}>
          <Image className={styles.logo} src="/img/svg/logo_preta.svg" width={50} height={50} layout="fixed" ></Image>

          <h1>ACTUAL</h1>

          <a href="">Home</a>
          <a href="">Projetos</a>
          <a href="">Serviços</a>
          <a href="">Produtos</a>
          <a href="">Clientes</a>
          <a href="">Contatos</a>
          <a href="#about">Sobre</a>

      </div>
      <Link href="/Login"><button>Login</button></Link>
    </div>
    )
}
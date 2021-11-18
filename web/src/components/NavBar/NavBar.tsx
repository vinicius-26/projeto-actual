import styles from './styles.module.css'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

const dataAtual = format(new Date(), 'EEEEEE, d MMMM', {locale: ptBR})

export function NavBar(){

    return(
    <div className={styles.container}>
      <div className={styles.navbar}>
          <Image className={styles.logo} src="/img/svg/logo_preta.svg" width={50} height={50} layout="fixed" ></Image>

          <h1>ACTUAL</h1>

          <a href="/">Home</a>
          <a href="">Projetos</a>
          <Link href="/#servicos"><a>Serviços</a></Link>
          <Link href="/#produtos"><a>Produtos</a></Link>
          <Link href="/#clientes"><a>Clientes</a></Link>
          <Link href="/Contatos"><a>Contatos</a></Link>
          <Link href="/#about"><a>Sobre</a></Link>

      </div>
      <p>{dataAtual}</p>
    </div>
    )
}
import styles from './styles.module.css'
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image'
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'
import { useRouter } from 'next/router';

const dataAtual = format(new Date(), 'EEEEEE, d MMMM', {locale: ptBR})

interface HeaderProps{
  conteudoHeader?: React.ReactNode;
}

const NavBar: React.FC<HeaderProps> = () => {

  const [dropdown, setDropdown] = useState({
    display: 'none'
  });

  const ref = useRef(null)
  const router = useRouter();


  function handleClickOutside(){
    if(ref.current){
      setDropdown({display: 'none'});
    }
  }

  useEffect(()=>{
    router.events.on('routeChangeStart', url => {
      setDropdown({display:'none'});
    });

    document.addEventListener("click", handleClickOutside, true)
    
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }

  },[ref])

  useEffect(()=>{
    function handleResize() {
      if(window.innerWidth > 768){
        setDropdown({display: 'none'});
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[])

  function handleDisplayDropdown (){
    setDropdown({display: 'block'})
  }

    return(
    <div className={styles.container}>
      <div className={styles.conteudo}>
        <div className={styles.logo}>
          <img src="img/logo_preta.png" alt="" />
          <h2>Actual </h2>
        </div>
        <nav className={styles.menu}>
          <div>
            <button ref={ref} onClick={handleDisplayDropdown} className={styles.dropdown}>
            <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <ul style={dropdown}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#servicos">Serviços</Link></li>
              <li><Link href="/#produtos">Produtos</Link></li>
              <li><Link href="/#clientes">Clientes</Link></li>
              <li><Link href="/Contatos">Contatos</Link></li>
              <li><Link href="/#sobre">Sobre</Link></li>
            </ul>
          </div>
          <div className={styles.desktopMenu}>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#servicos">Serviços</Link></li>
              <li><Link href="/#produtos">Produtos</Link></li>
              <li><Link href="/#clientes">Clientes</Link></li>
              <li><Link href="/Contatos">Contatos</Link></li>
              <li><Link href="/#sobre">Sobre</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className={styles.dataAtual}>
          <p>{dataAtual}</p>
      </div>
    </div>
    )
}

export default NavBar;
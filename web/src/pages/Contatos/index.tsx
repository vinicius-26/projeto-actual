import { FormEvent, useState } from 'react';
import Footer from '../../components/Footer';
import MaskedInputTelefone from '../../components/InputTelefone';
import { NavBar } from '../../components/NavBar/NavBar';
import styles from './styles.module.css'

const Contatos = () => {
  const [telefone, setTelefone] = useState('')

  function novaMensagem(e: FormEvent){

  } 

  const estilos = {
    border: {
      border: 0
    }
  }

  console.log(telefone)

    return(
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.form}>
          <form action="">
            <h3>Envie-nos uma mensagem</h3>

            <label htmlFor="">Nome completo</label>
            <input type="text" />

            <label htmlFor="">Email</label>
            <input type="email" placeholder="email@email.com"/>

            <label htmlFor="">Telefone</label>
            <MaskedInputTelefone value={telefone} onChange={(e) => {setTelefone(e.target.value)}}/>

            <label htmlFor="">Mensagem</label>
            <textarea name="" id="" cols={30} rows={10} maxLength={1000} defaultValue={''} /> 

            <div className={styles.buttonFooter}>
              <button className={styles.buttonSalvar}>Enviar</button>
              <button type="button" className={styles.buttonCancelar} onClick={() => setTelefone('')} >Limpar</button>
            </div>
          </form>
        </div>

        <div className={styles.contatos}>
              <table>
                <tr>
                  <td><i className="fa fa-map-marker fa-2x" aria-hidden="true" /></td>
                  <td><h3>Estamos localizados em</h3></td>
                  <td><img src="/img/svg/ativo_11.svg" alt="" /></td>
                </tr>
              </table>
              
              <iframe className={styles.mapa} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.698387172128!2d-46.75007568504746!3d-22.17555018538852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9adffffe8bb61%3A0x5d6ec56d39769b31!2sR.%20Rachid%20Elias%20Sobrinho%2C%20520%20-%20Jardim%20Monte%20Alegre%2C%20Esp%C3%ADrito%20Santo%20do%20Pinhal%20-%20SP%2C%2013990-000!5e0!3m2!1spt-BR!2sbr!4v1637252537747!5m2!1spt-BR!2sbr" width={550} height={400} loading="lazy"></iframe>   

              <table>
                <tr>
                  <td><i className="fa fa-phone fa-lg" aria-hidden="true"></i></td>
                  <td><h3>Nossos Contatos</h3></td>
                </tr>
              </table>

              <table>
                <tr>
                  <td><p>Telefone Fixo</p></td>
                  <td><p> <i className="fa fa-whatsapp" aria-hidden="true"></i> Fabiano</p></td>
                  <td><p> <i className="fa fa-whatsapp" aria-hidden="true"></i> Reginaldo</p></td>
                </tr>
                <tr>
                  <td><p>(19) 3661-4941</p></td>
                  <td><p>(19) 99936-8494 </p></td>
                  <td><p>(19) 98243-3014</p></td>
                </tr>
              </table>
        </div>
      </div>     
    </div>
    )
}

export default Contatos;
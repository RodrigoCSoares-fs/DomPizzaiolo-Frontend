import './Register.css'

import {IoIosArrowBack} from "react-icons/io"
import { Link } from 'react-router-dom';

export function Register (){
  return (
    <div>
      <main className="main-register">

        <div className="left-register-back">   
            <Link to="/Client"><span><IoIosArrowBack/></span></Link>
        </div>

        <div className="left-register">
         
        </div>
     
        <div className="right-register">
          
          <div className="card-register">

            <h1>Cadastrar</h1>

            <form action="#">

                <div className="input-field">
                  <input type="text" name="name" id="name" placeholder="Nome Completo"/>
                  <div className="underline"></div>
                </div>

                <div className="input-field">
                  <input type="text" name="email" id="email" placeholder="Email"/>
                  <div className="underline"></div>
                </div>

                <div className="input-field">
                  <input type="text" name="usuario" id="usuario" placeholder="Usuário"/>
                  <div className="underline"></div>
                </div>

                <div className="input-field">
                  <input type="password" name="password" id="password" placeholder="Senha"/>
                  <div className="underline"></div>
                </div>

                <div className="input-field">
                  <input type="password" name="password" id="password" placeholder="Confirme sua senha"/>
                  <div className="underline"></div>
                </div>

                <input type="submit" value="Cadastrar" />

            </form>


          </div>

        </div>

      </main>
    </div>
  );

}
import "./Login.css";

import { ImProfile } from "react-icons/im";
import { GrUpdate } from "react-icons/gr";

import { Link } from "react-router-dom";

export function Login() {
  return (
    <div>
      <main className="main-login">
        <div className="left-login"></div>

        <div className="right-login">
          <div className="card-login">
            <h1>Login</h1>

            <form action="#" method="post">
              <div className="input-field">
                <input
                  type="text"
                  name="user"
                  id="user"
                  placeholder="Usuário"
                />
                <div className="underline"></div>
              </div>

              <div className="input-field">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Senha"
                />
                <div className="underline"></div>
              </div>

              <input className="Logar" type="submit" value="Login" />
            </form>

            <div className="footer">
              <div className="register">
                <Link to="/Register">
                  <span>
                    <ImProfile />{" "}
                  </span>
                  Criar conta
                </Link>
              </div>

              <div className="password-remember">
                <a href="#">Esqueceu sua senha?</a>
              </div>
            </div>

            <div className="texto">
              <h2 id="txt">
                Vou matar minha fome<br></br>no Dom Pizzaiolo!
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

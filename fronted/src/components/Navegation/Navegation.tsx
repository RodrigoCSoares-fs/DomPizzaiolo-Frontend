import { Link } from "react-router-dom";
import "./Navegation.css";

export function Navegation() {
  return (
    <div className="Navbar">
      <h1 className="Logo">Dom Pizzaiolo</h1>
      <nav>
        <ul>
          <Link to="/Register">
            <li className="">
              <a>Criar Conta</a>
            </li>
          </Link>
          <Link to="/">
            <li className="menu-entrar">
              <a>Entrar</a>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

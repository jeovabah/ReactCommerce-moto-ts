import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "./styles";

export const Nav = () => {
  return (
    <Navigation>
      <ul>
        <li>
          <Link className="btn btn-outline-success" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="btn btn-outline-success" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="btn btn-outline-success" to="/newproduct">
            Registro de Produtos
          </Link>
        </li>
      </ul>
    </Navigation>
  );
};

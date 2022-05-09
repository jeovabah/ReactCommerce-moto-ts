import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
export const Header = () => {
  return (
    <>
    <header className={styles.header}>
      <div>
      <nav>
        <div className={styles.logo}>
          <h1>
            Innovarte <br /> <span>Motos</span>{" "}
          </h1>
        </div>
        
        <ul>
          <li>
            <Link className="btn btn-outline-success" to="/">Home</Link>
          </li>
          <li>
            <Link className="btn btn-outline-success" to="/login">Login</Link>
          </li>
          <li>
            <Link className="btn btn-outline-success" to="/newproduct">Register Product</Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
    </>
  );
};

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { RiMenu3Fill } from "react-icons/ri"

export const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);
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
      <div id={styles.navMobile} >
            <Link to="/login">Login</Link>
            <Link to="/newProduct">Register</Link>
            <Link to="/">Produto</Link>
          </div>
    </header>
    </>
  );
};

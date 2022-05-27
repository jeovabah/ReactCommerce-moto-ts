import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { RiMenu3Fill } from "react-icons/ri"
import { Sidebar } from "../../components/Sidebar";
import { FaBars } from "react-icons/fa";

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    
    <header className={styles.header}>
      <div>
          <div className={styles.headerMobile}>
            <FaBars onClick={showSidebar} />
            { sidebar && <Sidebar active={setSidebar} /> }
          </div>
      <nav>
        <div className={styles.logo}>
          <h1>
            Innovarte <br /> <span>Motos</span>{" "}
          </h1>

        </div>
        
        

        <ul>
          <li>
            <Link className="btn btn-outline-success" to="/">Inicio</Link>
          </li>
          <li>
            <Link className="btn btn-outline-success" to="/login">Login</Link>
          </li>
          <li>
            <Link className="btn btn-outline-success" to="/newproduct">Registro de Produtos</Link>
          </li>
        </ul>
        
      </nav>
      </div>
      
    </header>
    </>
  );
};

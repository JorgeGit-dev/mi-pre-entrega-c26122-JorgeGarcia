import logo from "../../assets/distribuidora.png";
import { Nav } from "../nav/Nav";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img
          src={logo}
          alt="Logo Distribuidora Reactiva"
          className="logo"
        />
        <span>Distribuidora Reactiva</span>
      </div>
      <Nav />
    </header>
  );
};
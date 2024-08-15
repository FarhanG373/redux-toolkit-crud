import React from "react";
import s from "./Components.module.scss";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={s.navBar}>
      <div className={s.logo}>
        <img src={Logo} alt="" />
      </div>
      <ul className={s.navbar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

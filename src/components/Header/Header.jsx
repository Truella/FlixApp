import React from "react";
import styles from './header.module.css'
import NetFlixIcon from "./NetFlixIcon";
import Button from "../Utilities/Button";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className={styles.header}>
      <NetFlixIcon />
      <div>
        <Link to="/signIn">      <Button value="sign in" className="header_signIn_btn"/></Link>

      </div>
    </header>
  );
}

import styles from '../styles/Header.module.css'
import logo from '../img/Logo.svg'
import Search from "./Search";
import React from "react";

const Header = () => {
  return (
    <>
      <Search />
      <header className={styles.header}>
        <img src={logo} alt={'logo'} height={'112'}/>
        <button className={styles.searchBtn}>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19.5C15.4183 19.5 19 15.9183 19 11.5C19 7.08172 15.4183 3.5 11 3.5C6.58172 3.5 3 7.08172 3 11.5C3 15.9183 6.58172 19.5 11 19.5Z" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 21.5L16.65 17.15" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Поиск...
        </button>
      </header>
    </>
  );
};

export default Header;

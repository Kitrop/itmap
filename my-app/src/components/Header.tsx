import styles from '../styles/Header.module.css'
import logo from '../img/Logo.svg'
import Search from "./Search";
import React, {useState} from "react";
import cn from 'classnames'
import s from "../styles/Search.module.css";
import {NavLink} from "react-router-dom";
const Header = () => {

  const sections = [
    'Лабораторный корпус',
    'Конгресс центр',
    'Главный корпус',
    'Музей истории электросвязи',
    'Дисит',
    'Библиотечный корпус',
    'УЛК'
  ]

  const [value, setValue] = useState('')
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <>
      <Search visible={visible} setVisible={setVisible}/>
      <header className={styles.header}>
        <NavLink to={`/`}>
          <img src={logo} alt={'logo'} height={'100'}/>
        </NavLink>
        <button className={styles.searchBtn} onClick={() => setVisible(!visible)}>
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

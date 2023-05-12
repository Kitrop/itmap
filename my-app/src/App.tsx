import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./components/AboutPage";
import Search from "./components/Search";

const App = () => {
  return (
    <>

      <Header />
      <Routes>
        <Route path={'/main'} element={<Main/>}/>
        <Route path={'/'} element={<Main/>}/>
        <Route path={'/about/:name'} element={<AboutPage />}/>
      </Routes>
    </>
  );
}

export default App;

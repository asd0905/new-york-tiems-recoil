import React from 'react';
import Routers from './Routers';
import { createGlobalStyle } from 'styled-components';
import Footer from './layout/footer/footer';
import Header from './layout/header/Header';
function App() {

  const GlobalStyled = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline-none;
    }
    a {
      text-decoration: none;
    }
    li, ul {
      list-style: none;
    }
    body {
      font-size: 16px;
    }
  `;

  return (
    <>
      <GlobalStyled />
      <Header />
      <Routers />
      <Footer />
    </>
  );
}

export default App;

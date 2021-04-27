import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Router } from './router';
import { Header } from './components/header';

function App() {
  return (
    <>
      <Header />
      <Router />
      <GlobalStyles />
    </>
  );
}

export default App;

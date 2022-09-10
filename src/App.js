import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Container from "./components/Container/Container";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className='div'>
      <Header/>
      <Container></Container>
      <Footer></Footer>
    </div>
  )
}

export default App;
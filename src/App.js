import React from 'react';
import { Header } from './components/Header/Header';
import { ImageBody } from './components/ImageBody/ImageBody';
import { TextGrid } from './components/TextGrid/TextGrid';
import { Footer } from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <ImageBody />
      <TextGrid />
      <Footer />
    </div>
  );
}

export default App;

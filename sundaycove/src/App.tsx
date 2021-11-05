import React from 'react';
import './App.css';
import Menubar from "./components/Menubar"
import PageSection from './components/PageSection';
import MainVisual from './components/MainVisual';
import Concept from './components/Concept';
import Products from './components/Products';
import News from './components/News';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menubar />
      <MainVisual />
      <Concept />
      <Products />
      <News />
      <Info />
      <Footer />
      <PageSection>
      </PageSection>
    </div>
  );
}

export default App;
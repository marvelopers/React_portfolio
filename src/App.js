import React from 'react';
import logo from './logo.svg';
import './App.css';

import Sample from './component/Sample';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Work from './component/Work';
import Testimonials from './component/Testimonials';
import Contact from './component/Contact';


function App() {

  console.log('App() 실행');

  return (
    <>
      <Navbar></Navbar>
      <main>
        <section id="portfolio">
          <Home></Home>
          <About></About>
          <Work></Work>
          <Testimonials></Testimonials>
          <Contact></Contact>
        </section>
      </main>
    </>
  );
}

export default App;

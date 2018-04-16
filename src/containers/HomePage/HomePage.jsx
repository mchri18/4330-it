import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import Contact from '../../components/Contact/Contact';
import Mission from '../../components/Mission/Mission';
import Footer from '../../components/Footer/Footer';
import './HomePage.css';

const HomePage = () => (
  <div id="home" className="Page">
    <header className="Page-header">
      <Navbar />
      <Hero />
    </header>
    <div class='Bottom-page'>
      <div id="Mission">
        <Mission />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
    <footer className="Page-footer" id="contact">
      <Footer />
    </footer>
  </div>
);

export default HomePage;

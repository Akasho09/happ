import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Rooms />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;

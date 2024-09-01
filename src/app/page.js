


import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import HeroSection1 from './components/HeroSection1';
import HeroSection2 from './components/HeroSection2';
import HeroSection3 from './components/HeroSection3';
import Testimonials from './components/Testimonial';

const Home = () => {
  return (
    <>
     <Header />
    <HeroSection2/>
    <HeroSection3/>
    <HeroSection1/>
    
    <MainContent />
    <Testimonials/>
    <br></br>
    <Footer/>
    </>
  );
};

export default Home;




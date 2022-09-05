import React from 'react';
import { Download } from './components/Download/Download';
import { Features } from './components/Features/Features';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Download />
    </>
  );
};

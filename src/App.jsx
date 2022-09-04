import React from 'react';
import { Features } from './components/Features/Features';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
    </>
  );
};

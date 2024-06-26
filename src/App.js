import React from 'react'
import './App.css';

import { Aticle, Brand, CTA, Feature, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './container';

const App = () => {


return (
  <div className='App'>
    <div className='gradient__bg'>
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
)
}

export default App
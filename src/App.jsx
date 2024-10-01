
import './App.css'
import Nav from './components/Nav'
import * as React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import MediaSlideshow from './components/MediaSlideshowHome';


function App() {
  return (
    <>
      <Nav />
      <Home />
      <MediaSlideshow />
      <Footer />
    </>
  )
}

export default App

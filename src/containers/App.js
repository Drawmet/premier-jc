import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navba';
import CarouselBanner from '../components/CarouselBanner';
import Collage from '../components/Collage';
import Poll from '../components/Poll';
import Games from '../components/Games';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar color="dark" dark={true} light={true}/>
        <CarouselBanner />
        <Collage/>
        <Poll/>
        <Games/>
      </div>
    );
  }
}

export default App;

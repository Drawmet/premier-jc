import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navba';
import CarouselBanner from '../components/CarouselBanner';
import Collage from '../components/Collage';
import Poll from '../components/Poll';
import Games from '../components/Games';
import Faq from '../components/Faq';
import {connect} from 'react-redux';
import actions from '../actions/actions';


class App extends Component {
  render() {
    
    const content = this.props.content;
    const switchLanguage = this.props.switchLanguage;

    if(content){
      return (
        <div className="App">
          <Navbar color="dark" dark={true} light={true} data={content.page.menu} switchLanguage={switchLanguage}/>
          <CarouselBanner data={content.page.carousel}/>
          <Collage data={content.page.collage}/>
          <Poll data={content.page.poll}/>
          <Games data={content.page.games}/>
          <Faq data={content.page.faq}/>
        </div>
      );
    } else { return; }
  }
}

export default connect(
  (state) => ({content: state.content}),
  (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
)(App);;
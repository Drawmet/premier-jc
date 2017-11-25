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
import User from '../components/User';


class App extends Component {
  render() {
    
    const content = this.props.content.content;
    console.log(this.props);
    const getAuthentification = this.props.getAuthentification;
    const switchLanguage = this.props.switchLanguage;
    const user = this.props.user;

    const userBlock = () => {
      if (user){
      return (
        <User data={user}/>
      );
    }}

    if(content){
      return (
        <div className="App">
          <Navbar color="dark" dark={true} light={true} data={content.page.menu}
          getAuthentification={getAuthentification} switchLanguage={switchLanguage}/>
          <CarouselBanner data={content.page.carousel}/>
          <Collage data={content.page.collage}/>
          <Poll data={content.page.poll}/>
          <Games data={content.page.games}/>
          <Faq data={content.page.faq}/>
        </div>
      );
    } else { return <div></div> }
  }
}

export default connect(
  (state) => ({content: state.content, user: state.user}),
  (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang)),
                  getAuthentification: (user) => dispatch(actions.getAuthentification(user))}),
)(App);;
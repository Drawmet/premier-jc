import React,{Component} from 'react';
import FadeBlock from './FadeGame';
import {Col, Row, Container} from 'reactstrap';
import './Games.css';   
import banner from '../assets/games-banner.jpg';
import rouletteImg from '../assets/american-roulette.jpg';
import jackImg from '../assets/blackjack.jpg';
import crapsImg from '../assets/craps.jpg';
import drawImg from '../assets/draw-poker.jpg';
import studImg from '../assets/7card.jpg';
import holdemImg from '../assets/holdem.jpg';
import bakaraImg from '../assets/bakara.jpg';

export default class Games extends Component{
    
    render(){
        const data = this.props.data;
        const items = [
            {
                src: rouletteImg,
                ...data.items[0],
            },{
                src: jackImg,
                ...data.items[1],
            },{
                src: crapsImg,
                ...data.items[2],
            },{
                src: drawImg,
                ...data.items[3],
            },{
                src: studImg,
                ...data.items[4],
            },{
                src: holdemImg,
                ...data.items[5],
            },{
                src: bakaraImg,
                ...data.items[6],
            }]
        const games = items.map((item) => {
            return (
                <Row>
                    <FadeBlock img={item.src} header={item.header} body={item.body}></FadeBlock>
                </Row>
            )
        })

        return(
            <section className="games">
                <Container>
                    <div className="header">
                        <h2>{data.header}</h2>
                        <p className="h6">{data.p}</p>
                    </div>
                    <img className="banner" src={banner} alt=""/>
                    <div className="gamesblock">
                        {games}
                    </div>
                </Container>
            </section>
        )
    }
}
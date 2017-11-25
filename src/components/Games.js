import React,{Component} from 'react';
import FadeBlock from './FadeGame';
import {Row, Container} from 'reactstrap';
import './Games.css';
import '../assets/american-roulette.jpg';
import '../assets/blackjack.jpg';
import '../assets/craps.jpg';
import '../assets/draw-poker.jpg';
import '../assets/7card.jpg';
import '../assets/holdem.jpg';
import '../assets/bakara.jpg';

export default class Games extends Component{
    
    render(){
        const data = this.props.data;
        const games = data.items.map((item, index, array) => {
            if(index%2===1)
                    return  (
                        <Row>
                            <div className="col-md-6">
                                <FadeBlock img={item.src} header={item.header} body={item.body}></FadeBlock>
                            </div>
                            <div className="col-md-6">
                                <FadeBlock img={array[index-1].src} header={array[index-1].header} body={array[index-1].body}></FadeBlock>
                            </div>
                        </Row>
                    )
            else if (index === array.length-1)
                    return  (
                        <Row>
                            <div className="col-md-12">
                                <FadeBlock img={item.src} header={item.header} body={item.body}></FadeBlock>
                            </div>
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
                        <div className="gamesblock">
                            {games}
                        </div>
                </Container>
            </section>
        )
    }
}
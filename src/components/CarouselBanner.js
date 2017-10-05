import React,{Component} from 'react';
import {
    Carousel, 
    CarouselItem, 
    CarouselControl, 
    CarouselIndicators, 
    CarouselCaption, 
    Button,
    Row
} from 'reactstrap';
import './CarouselBanner.css';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';


export default class CarouselBanner extends Component{
    constructor(props){
        super(props);
        
        this.state={
            dataTarget: this.props.activeData,
            activeIndex: 0,
            slides: [{
                src: banner1,
                title: 'Лучшие джанкет туры для вас.',
                altText: this.title,
                caption: 'Туры в различные страны Беларуси, Молдовы, России, Болгарии, Армении.',
                buttonCaption: 'Узнай сейчас',
                float: 'text-left',
            },{
                src: banner2,
                title: 'Привет Медвед.',
                altText: this.title,
                caption: 'Больше золота.',
                buttonCaption: 'Попробуй тут',
                float: 'text-center',
            },{
                src: banner3,
                title: 'Остановись тут.',
                altText: this.title,
                caption: 'Среди множества разного найти сложно.',
                buttonCaption: 'Стань одним из первых',
                float: 'text-right',
            }]
        }
    }

    onExiting = () => {
        this.animating = true;
    }

    onExited = () => {
        this.animating = false;
    }

    next = () => {
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.slides.length - 1 ? 0 : this.state.activeIndex + 1;
         this.setState({
            activeIndex: nextIndex,
        });
    }

    previous = () => {
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.slides.length - 1 : this.state.activeIndex - 1;
        this.setState({
            activeIndex: nextIndex,
        });
    }

    goToIndex = (newIndex) => {
        if(this.animating) return;
        this.setState({
            activeIndex: newIndex,
        })
    }

    
    render(){
        const {activeIndex} = this.state;

        const slides = this.state.slides.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                    src={item.src}
                    altText={item.altText}
                >
                    <a href="/"><div className="opacity-shadow"></div></a>
                    <CarouselCaption captionText={item.caption} 
                                     captionHeader={item.title}/>
                </CarouselItem>
            );
        });
        return(
            <section className="banner-section">
                <Row>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={this.state.slides} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
                </Row>
            </section>
        
        )
    }
}
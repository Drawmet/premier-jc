import React,{Component} from 'react';
import {
    Carousel, 
    CarouselItem, 
    CarouselControl, 
    CarouselIndicators, 
    CarouselCaption, 
    Row
} from 'reactstrap';
import './CarouselBanner.css';
import '../assets/banner1.jpg';
import '../assets/banner2.jpg';
import '../assets/banner3.jpg';

export default class CarouselBanner extends Component{
    constructor(props){
        super(props);
        
        this.state={
            dataTarget: this.props.activeData,
            activeIndex: 0,
            slides: this.props.data.slides,
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
        const data = this.props.data;
        const slides = data.slides.map((item) => {
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
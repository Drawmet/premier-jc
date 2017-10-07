import React, {Component} from 'react';
import './Collage.css';
import collage1 from '../assets/collage-1.jpg';
import collage2 from '../assets/collage-2.jpg';
import collage3 from '../assets/collage-3.jpg';
import collage4 from '../assets/collage-4.jpg';
import collage5 from '../assets/collage-5.jpg';
import collage6 from '../assets/collage-6.jpg';

export default class Collage extends Component{
    render(){
        const data = this.props.data;
       return(
        <section className="collage">
            <div className="container">
                <div className="row">
                <div className="grid">
                    <div className="col-1">
                        <div className="intro">
                            <h1 className="p1">{data.header}</h1>
                        </div>
                        <div className="item">
                            <a href="single.html" className="transition animate-box fadeIn animated">
                                <img src={collage6} alt=""  />
                            <div className="item-text-wrap">
                                <div className="item-text">
                                    <h2>{data.item1}</h2>
                                </div>
                            </div>                                
                            </a>
                        </div>
                        <div className="item">
                            <a href="single.html" className="transition animate-box fadeIn animated">
                                <img src={collage4} alt=""  />
                                <div className="item-text-wrap">
                                    <div className="item-text">
                                        <h2>{data.item2}</h2>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="single.html" className="transition animate-box fadeIn animated">
                                <img src={collage3} alt=""  />
                                <div className="item-text-wrap">
                                    <div className="item-text">
                                        <h2>{data.item3}</h2>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="item">
                            <a href="single.html" className="transition animate-box fadeIn animated">
                                <img src={collage2} alt=""  />
                                <div className="item-text-wrap">
                                    <div className="item-text">
                                        <h2>{data.item4}</h2>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="single.html" className="transition animate-box fadeIn animated">
                                <img src={collage5} alt=""  />
                                <div className="item-text-wrap">
                                    <div className="item-text">
                                        <h2>{data.item5}</h2>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="item">
                            <a href="single.html" className="transition animate-box fadeIn animated">
                                <img src={collage1} alt=""  />
                                <div className="item-text-wrap">
                                    <div className="item-text">
                                        <h2>{data.item6}</h2>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
       ) 
    }

}
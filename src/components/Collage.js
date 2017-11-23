import React, {Component} from 'react';
import './Collage.css';
import '../assets/collage-1.jpg';
import '../assets/collage-2.jpg';
import '../assets/collage-3.jpg';
import '../assets/collage-4.jpg';
import '../assets/collage-5.jpg';
import '../assets/collage-6.jpg';
import '../assets/collage-7.jpg';
import '../assets/collage-8.jpg';
import '../assets/collage-9.jpg';
import '../assets/collage-10.jpg';

export default class Collage extends Component{
    render(){
        const data = this.props.data;
        const games_col1 = data.items.map((item, index)=>{
            if(index%2===0){
                return(
                <div className="item">
                    <a href="single.html" className="transition animate-box fadeIn animated">
                        <img src={item.img} alt=""  />
                    <div className="item-text-wrap">
                        <div className="item-text">
                            <h2>{item.name}</h2>
                        </div>
                    </div>                                
                    </a>
                </div>)
            }
            return;
        });
        const games_col2 = data.items.map((item, index)=>{
            if(index%2===1){
                return(
                <div className="item">
                    <a href="single.html" className="transition animate-box fadeIn animated">
                        <img src={item.img} alt=""  />
                    <div className="item-text-wrap">
                        <div className="item-text">
                            <h2>{item.name}</h2>
                        </div>
                    </div>                                
                    </a>
                </div>)
            }
            return
        });
       return(
        <section className="collage">
            <div className="container">
                <div className="row">
                    <div className="grid">
                        <div className="col-1">
                            <div className="intro">
                                <h1 className="p1">{data.header}</h1>
                            </div>
                            {games_col1}
                        </div>
                        <div className="col-2">
                            {games_col2}
                        </div>
                    </div>
                </div>
            </div>
        </section>
       ) 
    }

}
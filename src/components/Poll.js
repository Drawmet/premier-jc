import React,{Component} from 'react';
import './Poll.css';

export default class Poll extends Component{
    constructor(props){
        super(props);
        this.state = {
            styleAnimated: 'item',
            styleHeaderAnimated: 'header opacity-header'
        }
    }
    
    onFocus = () =>{
        this.setState({
            styleAnimated: 'animated fadeIn',
            styleHeaderAnimated: 'animated fadeIn header'
        })
    }

    render(){
        const data = this.props.data;
        return(
             <section className="poll" onMouseOver={this.onFocus}>
                <div className="container">
                    <div className={this.state.styleHeaderAnimated} >
                        <h3>{data.header}</h3>
                        <p>{data.afterheader}</p>
                    </div>
                    <div className="poll-timeline">
                        <ul>
                            <li className={this.state.styleAnimated} style={this.state.animated}>
                                <div className="title">{data.item1.title}</div>
                                <div className="info">{data.item1.info}</div>
                                <div className="number">
                                    <span>1.</span>
                                </div>
                            </li>
                            <li className={this.state.styleAnimated}>
                                <div className="title">{data.item2.title}</div>
                                <div className="info">{data.item2.info}</div>
                                <div className="number">
                                    <span>2.</span>
                                </div>
                            </li>
                            <li className={this.state.styleAnimated}>
                                <div className="title">{data.item3.title}</div>
                                <div className="info">{data.item3.info}</div>
                                <div className="number">
                                    <span>3.</span>
                                </div>
                            </li>
                            <li className={this.state.styleAnimated}>
                                <div className="title">{data.item4.title}</div>
                                <div className="info">{data.item4.info}</div>
                                <div className="number">
                                    <span>4.</span>
                                </div>
                            </li>
                            <li className={this.state.styleAnimated}>
                                <div className="title">{data.item5.title}</div>
                                <div className="info">{data.item5.info}</div>
                                <div className="number">
                                    <span>5.</span>
                                </div>
                            </li>
                            <li className={this.state.styleAnimated}>
                                <div className="title">{data.item6.title}</div>
                                <div className="info">{data.item6.info}</div>
                                <div className="number">
                                    <span>6.</span>
                                </div>
                            </li>
                            <li className={this.state.styleAnimated}>
                                <div className="title">{data.item7.title}</div>
                                <div className="info">{data.item7.info}</div>
                                <div className="number">
                                    <span>7.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
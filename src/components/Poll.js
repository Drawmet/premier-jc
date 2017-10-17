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
        const items = data.items.map((item, index)=>{
            return(
                <li className={this.state.styleAnimated} key={index} style={this.state.animated}>
                    <div className="title">{item.title}</div>
                    <div className="info">{item.info}</div>
                    <div className="number">
                        <span>{index+1}.</span>
                    </div>
                </li>
            )
        })
        return(
             <section className="poll" onMouseOver={this.onFocus}>
                <div className="container">
                    <div className={this.state.styleHeaderAnimated} >
                        <h3>{data.header}</h3>
                        <p>{data.afterheader}</p>
                    </div>
                    <div className="poll-timeline">
                        <ul>
                            {items}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
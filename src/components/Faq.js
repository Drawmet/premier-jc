import React,{Component} from 'react';
import './Faq.css';

export default class Faq extends Component{
    render(){
        const data = this.props.data;
        const questions = data.items.map((item) =>{
            return(
                <p className="p1 lead">
                    <span className="s1">
                        <b>{item.question}<br/></b>
                    </span>
                    {item.answer}
                </p>
            )
        })
        return(
            <section className="faq">
                <div className="container heading-faq">
                    <h1 class="rte-heading text-center">{data.header}</h1>
                    <h4 className="p1 text-center">{data.p}</h4>
                    <div className="row">
                        <div className="rte col-md-offset-2 col-md-8 col-sm-12 col-sm-offset-0 faq-answer">
                            {questions}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
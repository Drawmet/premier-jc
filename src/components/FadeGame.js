import React,{Component} from 'react';
import {Button, Fade, Media, Col} from 'reactstrap';

export default class MyPopover extends Component{
    constructor(props) {
        super(props);
        this.state = {
          fadeIn: false,
        };
      }

      onOpenBlock = () =>{

      }
    
      toggle = () => {
        this.setState({
          fadeIn: !this.state.fadeIn
        });
      }

      render(){
          return(
            <div className="fadeblock">
              <Col xs="4">
                <img src={this.props.img} alt=""/>
                <Button onClick={this.toggle}>{this.props.header}</Button>
              </Col>
              <Col xs="auto" className="fadeblock text-left">
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    <Media>
                        <Media body>
                          <Media heading>
                            {this.props.header}
                          </Media>
                          {this.props.body}
                        </Media>
                    </Media>
                </Fade>
              </Col>
            </div>
          )
      }
}
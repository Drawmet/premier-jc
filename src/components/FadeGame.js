import React,{Component} from 'react';
import {Button, Fade, Media, Col} from 'reactstrap';

export default class MyPopover extends Component{
    constructor(props) {
        super(props);
        this.state = {
          fadeIn: false,         

        };
      }
    
      toggle = () => {
        this.setState({
          fadeIn: !this.state.fadeIn
        });
      }

      render(){
          return(
            <div className="fadeblock">
              <Col xs="auto">
                <Button onClick={this.toggle}>{this.props.header}</Button>
              </Col>
              <Col xs="auto" className="fadeblock-col text-left">
                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                    <Media>
                      <img src={this.props.img} alt=""/>
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
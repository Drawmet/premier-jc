import React, {Component} from 'react';

export default class User extends Component{

    render(){
        const user = this.props.user;
        console.log(user);
        return(
            <section className="user_block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6 col-lg-4">
                            <h1>{user.username}</h1>
                            <p className="lead">{user.name}</p>
                            <p className="lead">{user.lastname}</p>
                            <p className="lead">{user.bonus}</p>
                            <p className="lead">{user.lastname}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}
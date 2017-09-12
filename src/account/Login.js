import React, { Component } from 'react';

import BInput from '../components/BInput';
import AuthService from '../util/AuthService';


//Top level presentaitonal component
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {            
            email: '',
            password: ''
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        //TODO
        AuthService.login(this.state.email, this.state.password).then(()=>{
            // AuthService.getUser().then(user => {
            //     console.log(user);
            // });
        });
    }

    render() {

        return (
            <div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <form className="form-horizontal" onSubmit={this.onSubmit}>
                                <fieldset>
                                    <legend>Login</legend>
                                    <BInput type="email" label="Email" name="email" value={this.state.email} onChange={this.handleInputChange} required="true"></BInput>
                                    <BInput type="password" label="Password" name="password" value={this.state.password} onChange={this.handleInputChange} required="true"></BInput>
                                    <div>
                                        <button type="submit" className="btn btn-lg btn-primary">Login</button>
                                        <a style={{marginLeft: '15px'}} className="btn btn-lg btn-info" href="/signup">Register</a>
                                    </div>
                                    <br />
                                    <br />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
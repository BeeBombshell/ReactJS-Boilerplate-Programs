import React, { Component } from 'react';
import '../assets/style.css';
import axios from 'axios';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]: value
        });
    }

    //   insertData(nonce){
    //     axios.get('http://wp.ruvictor.com/api/user/register/?username='+this.state.username+'&email='+this.state.email+'&nonce=' + nonce + '&display_name='+this.state.display_name+'&insecure=cool')
    //     .then(res => {
    //       ///const data = res.data;
    //       ///console.log(data);
    //     }).catch(error => {
    //       console.log(error.response)
    //   });
    //   }

    //   getWPnonce(){
    //     axios.get('http://wp.ruvictor.com/api/get_nonce/?controller=user&method=register')
    //     .then(res => {
    //       this.insertData(res.data.nonce);
    //       ///console.log(res.data.nonce);
    //     }).catch(error => {
    //       console.log(error.response)
    //   });
    //   }

    handleSubmit(e) {
        e.preventDefault();
        // this.getWPnonce();
        axios.get('http://localhost:8080/?rest_route=/wp/v2/users')
            .then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error.response)
            });
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail">Email Address</label>
                        <input name="email" value={this.state.email} onChange={this.handleChange} type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword">Password</label>
                        <input name="password" value={this.state.password} onChange={this.handleChange} type="password" className="form-control" id="exampleInputPassword" placeholder="Enter Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;
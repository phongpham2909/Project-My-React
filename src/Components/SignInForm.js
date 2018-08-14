import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
    constructor()
    {
        super();
        this.state = {
            message: "Username or Password error!!!",
            data:{ email: '',  password: ''}
           
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }
    handleKeyPress(event)
    {
        if(event.keyCode === 13)
        {

        }
    } 
    render() {
      return (
          <div className="FormCenter">
              <form onSubmit={this.handleSubmit} className="FormFields">
                  <div className="FormField">
                      <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                      <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.data.email} onChange={this.handleChange}/>
                  </div>

                  <div className="FormField">
                      <label className="FormField__Label" htmlFor="password">Password</label>
                      <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"  value={this.state.data.password} onChange={this.handleChange} />
                  </div>
                  <div className="FormField">
                      <button className="FormField__Button mr-20">Sign In</button> <Link to="/sign-up" className="FormField__Link">Create an account</Link>
                  </div>
              </form>
          </div>
      );
    }
  }
  
  export default SignInForm;
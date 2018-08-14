import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';



const AccountList = [
    {
        email:"phongpham2140051@gmail.com",
        password:"29091996",
        name:"Phong Phạm"
    },
    {
        email:"phongpham2140051@gmail.com",
        password:"123456",
        name:"Phong Phạm 1"
    },
    {
        email:"phongpham2140051@gmail.com",
        password:"123456789",
        name:"Phong Phạm 2 "
    }
];

class SignInForm extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
             message: "Username or Password error!!!",
             email: '',  password: '' ,  logged: false
           
        };
        let session = this.getSession();
        if(session != null)
        {
            this.state.logged = true;
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }
    componentWillMount() {
        if (this.state.logged === true) {
            window.location.href = "/";
        }
    }
    getSession()
    {
        let session = window.localStorage.getItem("session");
        if(session != null)
        {
            return JSON.parse(session);
        }
        return null;
    }
    handleSubmit(event , keyCode) {
        if(this.state.email === "" || this.state.password === "")
        {
           alert(this.state.message);
        }
        else
        {
            let userInfo = this.checkUser();
            if(userInfo != null)
            {
                window.localStorage.setItem("session", JSON.stringify(userInfo));
                window.location.href="/"
                event.preventDefault();

            }
          
        }
     
    }

    checkUser()
    {
        let userInfo =  null;
        for(let i in AccountList)
        {
            if(this.state.email === AccountList[i].email && this.state.password === AccountList[i].password)
            {
                userInfo = AccountList[i];
                break;
            }
        }
        return userInfo;

    }
    handleKeyPress(event)
    {
        if(event.keyCode === 13)
        {
           this.handleSubmit(event, 13);
        }
    } 
    render() {
      return (
        <div className="App">
        <div className="App__Aside"></div>
        <div className="App__Form"> 
            <div className="PageSwitcher">
            <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
            <NavLink exact to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>

            <div className="FormTitle">
            <NavLink to="/sign-in"  activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or
            <NavLink exact to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div>              
   
       
        <div className="FormCenter">
              <form onSubmit={this.handleSubmit} className="FormFields">
                  <div className="FormField">
                      <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                      <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange}/>
                  </div>

                  <div className="FormField">
                      <label className="FormField__Label" htmlFor="password">Password</label>
                      <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"  value={this.state.password} onChange={this.handleChange} />
                  </div>

                  <div className="FormField">
                      <button className="FormField__Button mr-20" >Sign In</button> <Link to="/sign-up" className="FormField__Link">Create an account</Link>
                  </div>

              </form>
          </div>
          </div>
          </div>
      );
    }
  }
  
  export default SignInForm;
import React, { Component } from 'react';
import '../Custom_Style/Header.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {logged: false, userinfo: {email: "",name: ""}};

    let session = this.getSession();
    if(session !== null)
    {
      this.state.userinfo.email = session.email;
      this.state.userinfo.name = session.name;
      this.state.logged = true;
    }

  }
  componentDidMount()
  {
    if (this.state.logged === false) {
      if (window.location.pathname !== "/sign-in") {
        window.location.href = "/sign-in";
      }
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

  buildMenus() {
    let menus = [];
      menus.push((
        <Nav key={1}>
          <NavItem eventKey={1} href="/">Home</NavItem>
        </Nav>
      ));
      menus.push((
        <Nav key={2}>
          <NavItem eventKey={2} href="/Shop">Shop</NavItem>
        </Nav>
      ));
      menus.push((
        <Nav key={3}>
          <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
            <MenuItem onClick={this.onLogout.bind(this)} href="/Accounts" eventKey={3.1}>Accounts</MenuItem>
            <MenuItem eventKey={3.2} href="/accounts/rules">Accounts Rules</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      ));
      menus.push((
        <Nav pullRight key={4}>
          <NavDropdown eventKey={3} title={this.state.userinfo.name} id="nav-profile">
            <MenuItem onClick={this.onLogout.bind(this)} eventKey={3.1}>Logout</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
          </NavDropdown>
        </Nav>
      ));
    return menus;
  }
  onLogout(event) {
    window.localStorage.removeItem("session");
    window.location.href = "/sign-in";
    event.preventDefault();

  }

  render() {
    let menus = [];
    let headerTemplate = [];
    if(this.state.logged === true && window.location.pathname !== "/sign-in" )
    {
      menus = this.buildMenus();
      headerTemplate.push((
        <Navbar key= {1 }inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Phong Store</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {menus}
          </Navbar.Collapse>
        </Navbar>
      ));
    }
    return (
      <div>
        {headerTemplate}
      </div>
    );
  }
}

export default Header;
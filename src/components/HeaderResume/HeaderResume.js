import React, {Component} from 'react';
//import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './HeaderResume.css';
//import { Button } from 'reactbulma';

class HeaderResume extends Component{
  constructor(props){
    super(props);
    this.state = {active: false};
  }

  toogleNav = () => {
    console.log(this.state.active);
    this.setState((prevState, props) => ({
      active: !this.state.active
    }));
  }
  render(){
    return ( 
      <nav className="navbar is-transparent" aria-label="main navigation">
      <div id="specialShadow" className="bd-special-shadow"></div>
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src = {require('./route_trip.png')} alt="Trip planning" width="112" height="28"/>
          </a>
        </div>
        <div className="navbar-burger" onClick={this.toogleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={this.state.active ? "navbar-menu is-active" : "navbar-menu"}>
          <div className="navbar-start  list-menu">
            <a className="navbar-item">
              Home
            </a>
            <a className="navbar-item">
              Nuevo viaje
            </a>
          </div>
          <div className="navbar-end  list-menu">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link  list-menu">
                Configuración
              </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item">
                  Cambiar contraseña
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
      /*return (
          <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Link
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );*/
  }
}

export default HeaderResume;
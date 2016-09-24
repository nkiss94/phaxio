import React from 'react';
import { Row, Col, Input, Grid } from 'react-bootstrap';
import {Link} from 'react-router';


class Menu extends React.Component {
  render() {
    return(
      <div>
        <nav id="nav" className={this.props.state.toggle ? "visible" : ''}>
          <ul className="links">
            <li>
              <a className="menu-logo">
                <i className="icon fa-diamond"></i>
              </a>
            </li>   
            <li onClick={this.props.homeView}>
              <a>
                Home
              </a>
            </li>
            <li onClick={this.props.howView}>
              <a>
                How it works
              </a>
            </li>
            <li onClick={this.props.aboutView}>
              <a>
                About
              </a>
            </li>
            <li onClick={this.props.programsView}>
              <a>
                Programs
              </a>
            </li>
            <li onClick={this.props.productsView}>
              <a>
                Products
              </a>
            </li>
            <li onClick={this.props.storeView}>
              <a>
                Store
              </a>
            </li>
            <li onClick={this.props.loginView}>
              <a>
                Login
              </a>
            </li>
            <li onClick={this.props.registerView}>
              <a>
                Register
              </a>
            </li>
            <li onClick={this.props.contactView}>
              <a>
                Contact
              </a>
            </li>
          </ul>
          <a className="close" onClick={this.props.toggleMenu}></a>
        </nav>
</div>

    )
  }
}

export default Menu;
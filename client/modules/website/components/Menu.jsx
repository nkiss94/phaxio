import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

class Menu extends React.Component {

  render(){
    return(
        <div>
            <nav id="nav" className={this.props.state.toggle ? "visible" : ''}>
              <ul className="links">
                <li>
                  <a className="menu-logo">
                    <i className="icon fa-diamond"></i>
                </a>
              </li>
              <Link to={`/${this.props.profiles[0].url}`}>
                <li>
                    <a>
                      Home
                    </a>
                </li>
              </Link>
              <Link to={`/${this.props.profiles[0].url}`+'/how_it_works'}>
                <li>
                  <a>
                    How it works
                  </a>
                </li>
              </Link>
              <Link to={`/${this.props.profiles[0].url}`+'/about'}>
                <li>
                  <a>
                    About
                  </a>
                </li>
              </Link>
                <Link to={`/${this.props.profiles[0].url}`+'/programs'}>
                  <li>
                      <a>
                        Programs
                      </a>
                  </li>
                </Link>
                <Link to={`/${this.props.profiles[0].url}`+'/login'}>
                <li>
                  <a>
                    Login
                  </a>
                </li>
                </Link>
                <Link to={`/${this.props.profiles[0].url}`+'/register'}>
                <li>
                  <a>
                    Register
                  </a>
                </li>
                </Link>
                <Link to={`/${this.props.profiles[0].url}`+'/contact'}>
                <li>
                  <a>
                    Contact
                  </a>
                </li>
                </Link>
              </ul>
              <a className="close" onClick={this.props.toggleMenu}></a>
            </nav>
        </div>
    )
  }
}

export default Menu; 
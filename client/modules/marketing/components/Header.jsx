import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router';


const Header = ( { content = () => null }) => (

<div id="home3">
  <div id='header-1'>
    <header className="navbar normal" role="banner">
      <div>
        <div className="navbar-header">
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
              MENU
            </button>
            <Link to="/homepage" className="navbar-brand">Sculpt</Link>
        </div>
        <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
            <ul className="nav navbar-nav navbar-right visible-md visible-lg">
              <li>
                  <Link to="/register" className="button">Sign up free</Link>
              </li>
            </ul>
        </nav>
      </div>
  </header>
  </div>
</div>
);

export default Header;
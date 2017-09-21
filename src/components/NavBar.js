import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthService from '../util/AuthService';

class NavBar extends Component {
  logout = () => {
    AuthService.logout();
  };

  render() {
    const isLoggedIn = this.props.user && this.props.user.roles;
    const userId = this.props.user ? this.props.user._id : '';

    return (
      <nav className="navbar navbar-default navbar-fixed-top topnav">
        <div className="container-fluid topnav" id="navcontainer">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#js-navbar-collapse"
              target="_self"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/" className="navbar-brand">
              erickizaki.com
            </Link>
          </div>
          <div className="navbar-collapse collapse" id="js-navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/blog">BLOG</Link>
              </li>
              <li>
                <Link to="/portfolio">PORTFOLIO</Link>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  DEMOS <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/crud">AngularJS</Link>
                  </li>
                  <li>
                    <a
                      href="https://dazzling-fire-6644.firebaseapp.com/presentations/#/start"
                      target="_blank"
                    >
                      WebGL Presentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dazzling-fire-6644.firebaseapp.com/threejs/"
                      target="_blank"
                    >
                      Three.js House
                    </a>
                  </li>
                  <li>
                    <a href="threejslot/index.html" target="_blank">
                      Three.js Lot
                    </a>
                  </li>
                  <li>
                    <a
                      href="presentations/css3transitions/index.html"
                      target="_blank"
                    >
                      CSS3 Transitions Presentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="presentations/css3transitions/GraphicalTrain.html"
                      target="_blank"
                    >
                      CSS3 Transitions Demo
                    </a>
                  </li>
                  <li>
                    <a
                      href="presentations/IndexedDB/index.html"
                      target="_blank"
                    >
                      IndexedDB Presentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/KamiMoon/TodoMVC"
                      target="_blank"
                    >
                      jQuery
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/KamiMoon/websocketdemo"
                      target="_blank"
                    >
                      Java
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
              {isLoggedIn && (
                <li>
                  <Link to={`/profile/${userId}`}>PROFILE</Link>
                </li>
              )}

              {isLoggedIn && (
                <li>
                  <a onClick={this.logout}>
                    <span className="glyphicon glyphicon-log-out" /> LOGOUT
                  </a>
                </li>
              )}
              {!isLoggedIn && (
                <li>
                  <Link to="/signup">
                    <span className="glyphicon glyphicon-new-window" /> REGISTER
                  </Link>
                </li>
              )}
              {!isLoggedIn && (
                <li>
                  <Link to="/login">
                    <span className="glyphicon glyphicon-log-in" /> LOGIN
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

NavBar = connect(state => ({ user: state.user }))(NavBar);

export default NavBar;

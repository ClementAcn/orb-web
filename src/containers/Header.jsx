import React, { Component } from 'react';
// import logo from '../logo.png';
import './App.css';

class Header extends Component {
  render() {
    return (
        // <header className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        // </header>
        <header>

            <nav className="navbar fixed-top navbar-expand-lg navbar-dark stylish-color-dark scrolling-navbar">
                <a className="navbar-brand" href="#!"><strong>ORB</strong></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <a className="nav-link" href="#!">Accueil<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#!">Inscription</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#!">Contact</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav nav-flex-icons">
                        <li className="nav-item">
                        <a className="nav-link" href="#!"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#!"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="https://github.com/ClementAucoin/orb-web"><i className="fa fa-github"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    );
  }
}

export default Header;

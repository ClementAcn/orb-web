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

            <nav class="navbar fixed-top navbar-expand-lg navbar-dark stylish-color-dark scrolling-navbar">
                <a class="navbar-brand" href="#!"><strong>ORB</strong></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                        <a class="nav-link" href="#!">Accueil<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#!">Inscription</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#!">Contact</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav nav-flex-icons">
                        <li class="nav-item">
                        <a class="nav-link" href="#!"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#!"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="https://github.com/ClementAucoin/orb-web"><i class="fa fa-github"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    );
  }
}

export default Header;

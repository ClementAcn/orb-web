import React, { Component } from 'react';
import './App.css';
import Header from './Header.jsx';
// import Home from './Home.jsx';
import Connexion from './Connexion.jsx';
import Inscription   from './Inscription.jsx';
import FooterApp from './Footer.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

let res;

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      navigation: sessionStorage.getItem('navigation'),
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(a) {
    return function (e) {
      console.log('Click happened' + a);
      sessionStorage.setItem('navigation', a);
      window.location.reload();
    }
  }

  render() {

    console.log("navigation : " + this.state.navigation);
    if (parseInt(this.state.navigation, 10) === 2) {
      res = <Inscription name="Inscription" navig={this.handleClick} />
    // } else if (parseInt(this.state.navigation, 10) === 3) {
    //   res = <Modification name="Modification" navig={this.handleClick} />
    // } else if (parseInt(this.state.navigation, 10) === 4) {
    //   res = <Profil name="Profil" navig={this.handleClick} />
    // } else if (parseInt(this.state.navigation, 10) === 5) {
    //   res = <Home name="Home" navig={this.handleClick} />
    // } else if (parseInt(this.state.navigation, 10) === 6) {
    //   res = <Musique name="Musique" navig={this.handleClick} />
    // } else if (parseInt(this.state.navigation, 10) === 7) {
    //   sessionStorage.clear();
    //   this.handleClick(1);
    //   window.location.reload();
    // } else if (parseInt(this.state.navigation, 10) === 8) {
    //   res = <ProfilVisiter name="ProfilVisiter" navig={this.handleClick}/>
    // } 
    } else {
      res = <Connexion name="Connexion" navig={this.handleClick} />
    }

    return (
      <MuiThemeProvider>
        <div className="App">
          <Header/>
          
          {/* <Home/> */}
          {res}

          <FooterApp/>
        </div>      
      </MuiThemeProvider>
    );
  }
}

export default App;

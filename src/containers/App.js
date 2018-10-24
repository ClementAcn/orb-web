import React, { Component } from 'react';
import './App.css';
import Header from './Header.jsx';
import Home from './Home.jsx';
import FooterApp from './Footer.jsx';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        
        <Home/>

        <FooterApp/>
      </div>
    );
  }
}

export default App;

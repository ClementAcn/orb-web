import React, { Component } from 'react';
import './App.css';
import { Col, Container, Row, Footer } from "mdbreact";

class FooterApp extends Component {
  render() {
    return (      
        <Footer color="stylish-color-dark" className="font-small position-fixed w-100">
          <div className="footer-copyright text-center py-3">
            <Container fluid>
            Projet ORB - MARTIN Cédric | AUCOIN Clement | DUBERNET Samuel | MEAU Matthieux - &copy; {new Date().getFullYear()} Copyright{" "}
            </Container>
          </div>
        </Footer>
    );
  }
}

export default FooterApp;

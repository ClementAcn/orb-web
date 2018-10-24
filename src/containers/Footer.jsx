import React, { Component } from 'react';
import './App.css';
import { Col, Container, Row, Footer } from "mdbreact";

class FooterApp extends Component {
  render() {
    return (      
        <Footer color="stylish-color-dark" className="font-small pt-4 mt-4">
          <Container fluid className="text-center text-md-left">
            <Row>
              <Col md="6">
                <h5 className="title">Projet ORB</h5>
                <p>MARTIN Cédric | AUCOIN Clement | DUBERNET Samuel | MEAUX Mathieux </p>
              </Col>
              <Col md="6">
                <h5 className="title">Liens</h5>
                <ul>
                  <li className="list-unstyled">
                    <i className="fa fa-facebook-official fa-2x m-2" aria-hidden="true"></i>
                    <a href="#!">Facebook</a>
                  </li>
                  <li className="list-unstyled">
                    <i className="fa fa-twitter-square fa-2x m-2" aria-hidden="true"></i>
                    <a href="#!">Twitter</a>
                  </li>
                  <li className="list-unstyled">
                    <i className="fa fa-github fa-2x m-2" aria-hidden="true"></i>
                    <a href="https://github.com/ClementAucoin/orb-web">Github</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
              &copy; {new Date().getFullYear()} Copyright{" "}
            </Container>
          </div>
        </Footer>
    );
  }
}

export default FooterApp;

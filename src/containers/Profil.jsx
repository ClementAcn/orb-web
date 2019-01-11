import React, { Component } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBInput, MDBBtn, MDBView, MDBIcon} from 'mdbreact';
import logo from '../logo.gif';
import './App.css';
class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            result: 0,
            email: "",
            pseudo: "",
            id_place:"",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        fetch(`http://localhost:9090/user/id?id=${sessionStorage.getItem('userID')}`, {
            method: 'POST',
        }).then(results => {
            return results.json();
        }).then(data => {
            this.setState({
                 email: data.mail,
                 pseudo: data.pseudo
                 });
        })

        fetch(`http://localhost:9191//score/findNLastUser?n=1&id=${sessionStorage.getItem('userID')}`, {
            method: 'POST',
        }).then(results => {
            return results.json();
        }).then(data => {
            this.setState({
                 email: data.mail,
                 id: data.pseudo
                 });
        })
      return (
        <MDBContainer className="my-5 py-5 center">
            <MDBRow className="d-flex justify-content-center">
                <MDBView waves>
                    <img src={logo} className="img-fluid" alt="" />
                </MDBView>
            </MDBRow>
            <MDBRow>
                <MDBCol size="6">
                    <MDBInput
                        label="pseudo"
                        hint= {this.state.pseudo}
                        icon="id-card-o"
                        type="text"
                        disabled
                    />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size="6" icon="envelope">
                    <MDBInput
                        label="E-mail"
                        hint={this.state.email}
                        icon="envelope"
                        type="text"
                        disabled
                    />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size="9">
                    <MDBInput
                        label="Dernier avis"
                        hint="Très bon restaurant"
                        disabled
                        icon="star"
                    />
                </MDBCol>
                <MDBCol size="3" className="m-auto">
                    <MDBIcon
                        className="blue-text pr-3"
                        size="2x"
                        icon="star"
                    />
                    <MDBIcon
                        className="blue-text pr-3"
                        size="2x"
                        icon="star"
                    />
                    <MDBIcon
                        className="blue-text pr-3"
                        size="2x"
                        icon="star"
                    />
                    <MDBIcon
                        className="blue-text pr-3"
                        size="2x"
                        icon="star"
                    />
                    <MDBIcon
                        className="blue-text pr-3"
                        size="2x"
                        icon="star-o"
                    />
                </MDBCol>
            </MDBRow>
            <MDBRow className="d-flex col-12 justify-content-center">
                <MDBBtn className="w-50" outline size="sm" color="elegant">Modifier votre profil.</MDBBtn>
            </MDBRow>
        </MDBContainer>
      );
    }
}
export default Profil;
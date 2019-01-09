import React, { Component } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBInput, MDBBtn, MDBView} from 'mdbreact';
import logo from '../logo.gif';
import './App.css';
class ProfilModification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            id: "",
            mail: "",
            pseudo: "", 
            password: "",
            result: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        fetch(`http://localhost:9090/user/?user=${this.state.user}`, {
            method: 'POST',
        }).then(results => {
            return results.json();
        }).then(data => {
            this.setState({ result: data });
        })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
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
                        label="Votre nom"
                        icon="id-card-o"
                        group
                        type="text"
                        onChange={this.handleChange}
                        name="pseudo"
                        validate
                        error="wrong"
                        success="right"
                    />
                </MDBCol>
                <MDBCol size="6">
                    <MDBInput
                        label="Votre prénom"
                        icon="id-card-o"
                        group
                        type="text"
                        name="prenom"
                        onChange={this.handleChange}
                        validate
                        error="wrong"
                        success="right"
                    />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size="6" icon="envelope">
                    <MDBInput
                        label="Votre e-mail"
                        icon="envelope"
                        name="mail"
                        group
                        type="text"
                        onChange={this.handleChange}
                        validate
                        error="wrong"
                        success="right"
                    />
                </MDBCol>
                <MDBCol size="6" icon="envelope">
                    <MDBInput
                        label="Confirmer votre e-mail"
                        icon="envelope"
                        group
                        type="email"
                        name="mail"
                        onChange={this.handleChange}
                        validate
                        error="wrong"
                        success="right"
                    />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size="6">
                    <MDBInput
                        label="Votre mot de passe"
                        icon="lock"
                        group
                        type="password"
                        onChange={this.handleChange}
                        name="password"
                        validate
                    />
                </MDBCol>
                <MDBCol size="6">
                    <MDBInput
                        label="Confirmer votre mot de passe"
                        icon="lock"
                        group
                        name="password"
                        onChange={this.handleChange}
                        type="password"
                        validate
                    />
                </MDBCol>
            </MDBRow>
            <MDBRow className="d-flex col-12 justify-content-center">
                <MDBBtn className="w-50" onClick={this.handleSubmit} outline size="sm" color="elegant">Valider la modification de votre profil.</MDBBtn>
            </MDBRow>
            <MDBRow className="d-flex col-12 justify-content-center">
                <MDBBtn className="w-50" outline size="sm" onClick={this.props.navig(2)} color="danger">Annulation de la modification de votre profil.</MDBBtn>
            </MDBRow>
        </MDBContainer>
      );
    }
}
export default ProfilModification;
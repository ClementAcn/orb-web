import React, { Component } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBInput, MDBBtn, MDBView} from 'mdbreact';
import logo from '../logo.gif';
import './App.css';
class ProfilModification extends Component {
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
                        group
                        type="text"
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
                        validate
                    />
                </MDBCol>
                <MDBCol size="6">
                    <MDBInput
                        label="Confirmer votre mot de passe"
                        icon="lock"
                        group
                        type="password"
                        validate
                    />
                </MDBCol>
            </MDBRow>
            <MDBRow className="d-flex col-12 justify-content-center">
                <MDBBtn className="w-50" outline size="sm" color="elegant">Valider la modification de votre profil.</MDBBtn>
            </MDBRow>
            <MDBRow className="d-flex col-12 justify-content-center">
                <MDBBtn className="w-50" outline size="sm" color="danger">Annulation de la modification de votre profil.</MDBBtn>
            </MDBRow>
        </MDBContainer>
      );
    }
}
export default ProfilModification;
import React, { Component } from 'react';
import {MDBContainer, MDBCol, MDBRow} from 'mdbreact';
import TextField from 'material-ui/TextField';
import './App.css';
class Profil extends Component {
    render() {
      return (
        <MDBContainer className="my-5 py-5 center">
            <MDBRow>
                <MDBCol size="6">
                    <TextField color="pink" className="w-100" floatingLabelText="Votre nom" name="nom"/>
                </MDBCol>
                <MDBCol size="6">
                    <TextField className="w-100" floatingLabelText="Votre prénom" name="prenom"/>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size="6">
                    <TextField className="w-100" floatingLabelText="Votre mot de passe" name="mdp"/>
                </MDBCol>
                <MDBCol size="6">
                    <TextField className="w-100" floatingLabelText="Confirmation de votre mot de passe" name="mdp-conf"/>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size="6">
                    <TextField className="w-100" floatingLabelText="Votre e-mail" name="mail"/>
                </MDBCol>
                <MDBCol size="6">
                    <TextField className="w-100" floatingLabelText="Confirmation de votre e-mail" name="mail-conf"/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
      );
    }
}
export default Profil;
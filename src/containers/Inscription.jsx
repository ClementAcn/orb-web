import React, { Component } from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import {MDBContainer} from 'mdbreact'

class Inscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: "",
            prenom: "",
            mail: "",
            password: "",
            pseudo: ""
        };
        this.sendRequete = this.sendRequete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.verifIfEmpty = this.verifIfEmpty.bind(this);
    }

    sendRequete(a) {
        if (this.verifIfEmpty() === false) {
            console.log("error");
            this.setState({ openSnackbar2: true, });
        } else {
            // await sleep(5000);
            console.log("OK");
            this.setState({ openSnackbar: true, });
            if (navigator.geolocation) {
                fetch('http://localhost:9090/', {
                    method: 'POST',
                    mode: 'no-cors',
                    body: JSON.stringify(
                        {
                            "id": this.state.id,
                            "mail": this.state.mail,
                            "password": this.state.password,
                            "pseudo": this.state.pseudo,
                        }
                    ),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                sessionStorage.setItem('navigation', 1);
                return window.location.reload();
                // return null;
            };
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    verifIfEmpty(e) {
        // eslint-disable-next-line
        if (this.state.nom == 0 || this.state.prenom == 0 || this.state.dateNaissance == 0 || this.state.email == 0) {
            return false;
        } else {
            return true;
        }
    }

    handleRequestClose = () => {
        this.setState({ openSnackbar: false, openSnackbar2: false });
    };

    render() {
        return (
            <MDBContainer>
            <form action="#" className="text-center" method="GET">
            <br/>
            <br/>
            <br/>
            <div className="blockTitle">
                <h1> {this.props.name} </h1>
            </div>
            <div className="blockInscription">
                <div className="blockGauche">
                    <TextField floatingLabelText="Nom" name="nom" onChange={this.handleChange} />
                    <br />
                    <TextField floatingLabelText="Prenom" name="prenom" onChange={this.handleChange} />
                    <br />
                    <TextField floatingLabelText="Mot de passe" name="motDePasse" type="password" onChange={this.handleChange} />
                    <br />
                    <TextField floatingLabelText="Email" name="email" onChange={this.handleChange} />
                    <br />
                </div>
                <div className="blockCentrale">
                    <TextField floatingLabelText="Adresse" name="adresse" onChange={this.handleChange} />
                    <br />
                    {/* <div className="toggle">
                        <Toggle label="Compte publique" name="profilPublic" defaultToggled={true} onChange={this.handleChange} />
                    </div>
                    <br />
                    <div className="toggle">
                        <Toggle label="Autoriser la localisation" name="localisationPartage" defaultToggled={true} onChange={this.handleChange} />
                    </div> */}
                </div>
            </div>
            <br />
            <div className="blockButton" >
                <RaisedButton label="Inscription" onClick={this.sendRequete} />
                <Snackbar open={this.state.openSnackbar} message="Vous etes inscrit" autoHideDuration={4000} onRequestClose={this.handleRequestClose} />
                <Snackbar open={this.state.openSnackbar2} message="Manque un champ" autoHideDuration={4000} onRequestClose={this.handleRequestClose} />
            </div>
            </form >
            </MDBContainer>
        )
    }
};
export default Inscription;
import React, { Component } from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

class Inscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: "",
            prenom: "",
            motDePasse: "",
            dateNaissance: "",
            email: "",
            adresse: "",
            photo: "",
            profilPublic: true,
            localisationPartage: true,
            openSnackbar: false,
            openSnackbar2: false,
            latitude: 0,
            longitude: 0
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
                navigator.geolocation.getCurrentPosition((position) => {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    this.setState({
                        latitude: pos.lat,
                        longitude: pos.lng
                    })
                    console.log("latitude : " + pos.lat + "  | lng  : " + pos.lng);
                    fetch('http://localhost:8082/add', {
                        method: 'POST',
                        mode: 'no-cors',
                        body: JSON.stringify(
                            {
                                "nom": this.state.nom,
                                "prenom": this.state.prenom,
                                "motDePasse": this.state.motDePasse,
                                "dateNaissance": this.state.dateNaissance,
                                "email": this.state.email,
                                "adresse": this.state.adresse,
                                "photo": this.state.photo,
                                "profilPublic": this.state.profilPublic,
                                "localisationPartage": this.state.localisationPartage,
                                "listePersonneVisiter": [0],
                                "interetsMusicaux": [{
                                    "_id": 0,
                                    "className": "iut.nantes.projetMRS.entity.EntityGenreMusic",
                                    "name": "\"test\"",
                                    "picture": "\"test\""
                                }],
                                "localisation": {
                                    "latitude": this.state.latitude,
                                    "longitude": this.state.longitude
                                }
                            }
                        ),
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })
                    sessionStorage.setItem('navigation', 1);
                    return window.location.reload();
                    // return null;
                });

            }


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
            <form action="#" method="GET">
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
                        <TextField floatingLabelText="Date de naissane" name="dateNaissance" onChange={this.handleChange} errorText="format : jj/mm/aaaa" />
                        {/* <DatePicker hintText="Date de naissane" name="dateNaissance" autoOk="true" mode="landscape" onChange={this.handleChange} /> */}
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
        )
    }
};
export default Inscription;
import React, { Component } from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

let error;

class Connexion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pseudo: "", 
            password: "",
            result: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`http://localhost:9090/user/login?pseudo=${this.state.pseudo}&password=${this.state.password}`, {
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
        console.log(this.state.result);
        if (this.state.result === null) {
            error = <p className="messageInscription" style={{ backgroundColor: "#F44336" }}>Email ou mot de passe incorrecte</p>
            sessionStorage.setItem("isUserLogged", false);
        } else if (this.state.result === 0) {
            error = null;
        } else if (this.state.result !== null) {
            error = <p className="messageInscription" style={{ backgroundColor: "#4CAF50" }}>Correct</p>
            sessionStorage.setItem("isUserLogged", true);
            sessionStorage.setItem("user", JSON.stringify(this.state.result));
            sessionStorage.setItem('navigation', 6);
            window.location.reload();
        } 
        
        return (
            <div className="text-center mx-auto">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
                <div className="blockTitle">
                    <h1> {this.props.name} </h1>
                </div>
                <form action="profil.html" method="post">
                    {error}
                    <TextField floatingLabelText="Pseudo" name="pseudo" onChange={this.handleChange} errorText="Obligatoire" />
                    <br />
                    <TextField floatingLabelText="Password" name="password" onChange={this.handleChange} type="password" errorText="Obligatoire" />
                    <br />
                    <br />
                    <RaisedButton label="Connexion" onClick={this.handleSubmit} />
                </form >
                <br />
                <RaisedButton label="Inscription" onClick={this.props.navig(2)} />
                <br />
            </div>
        )
    }
};
export default Connexion;
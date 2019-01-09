import React, { Component } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBInput, MDBBtn, MDBView, MDBIcon} from 'mdbreact';
import logo from '../logo.gif';
import './App.css';
class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            result: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        fetch(`http://localhost:9090/user/id?id=${this.state.id}`, {
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
                    <MDBInput icon="id-card-o" label="Nom" hint="Poney" disabled type="text" />
                </MDBCol>
                <MDBCol size="6">
                    <MDBInput
                        label="Prénom"
                        hint="Jean"
                        icon="id-card-o"
                        type="text"
                        disabled
                    />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size="12" icon="envelope">
                    <MDBInput
                        label="E-mail"
                        hint="jeanleponey@gmail.com"
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
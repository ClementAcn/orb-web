import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer.jsx';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        latitude: 0,
        longitude: 0,
        user:[]
    };  
  }

  render() {
    return (
      <MDBContainer className="ml-0 my-5 py-5" >
        <MDBRow className="w-100">
          <MDBCol>
            <Paper className="p-3 h-100" elevation={3}>
              <Typography variant="h3" component="h1">
                PAPER 1
              </Typography>
              <Typography component="p">
                Premier paper j'écrits de la merde kjdfskfhkjlqhfkfjghfsjghsdfgjkhqlkfhlkfjhqsdlkjfhdsf
              </Typography>        
            <Divider />
              <Paper elevation={2} className="p-3">
                <Typography variant="h5" component="h1">
                  PAPER 2
                </Typography>
                <Typography component="p">
                  Deuxieme paper j'ecris aussi de la merde & jhfsdbf, djkezfhb
                </Typography>
              </Paper>
            </Paper>
          </MDBCol>
          <MDBCol>
            <MapContainer UserLatitude={this.state.latitude} UserLongitudes={this.state.longitude}/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Home;
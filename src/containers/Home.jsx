import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer.jsx';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
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
      <MDBContainer fluid className="ml-0 my-5 py-5">
        <MDBRow>
          <MDBCol className="col-3">
            <Paper className="p-3 h-100" elevation={3}>
              <Typography variant="h3">
                PAPER 1
              </Typography>
              <Typography>
                Premier paper j'écrits de la merde kjdfskfhkjlqhfkf jghfsjghsdfgjkhqlkfhlkfjhqsdlkjfhdsf
              </Typography>   
              <Paper elevation={2} className="p-3 mt-2">
                <Typography variant="h5">
                  PAPER 2
                </Typography>
                <Typography>
                  Deuxieme paper j'ecris aussi de la merde & jhfsdbf, djkezfhb
                </Typography>
              </Paper>
            </Paper>
          </MDBCol>
          <MDBCol className="col-9">
            <MapContainer UserLatitude={this.state.latitude} UserLongitudes={this.state.longitude}/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Home;
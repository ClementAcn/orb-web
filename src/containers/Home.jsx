import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer.jsx';
//import Button from '@material-ui/core/Button';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        latitude: 0,
        longitude: 0,
        user:[]
    };
    this.sendRequete = this.sendRequete.bind(this);
  } 

  sendRequete(a) {
    // await sleep(5000);
    console.log("OK");
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
      });
    }
  }

  render() {

    return (
    <div className="row col-xl-11 mx-auto my-5 py-5">
      {/* <MyMapComponent isMarkerShown /> */}
      
      <MapContainer latitudeValue={this.state.latitude} longitudeValue={this.state.longitude}/>
      <a onClick={this.sendRequete} href="#!" className="btn-floating btn-lg col-6 col-md-4"><i className="fa fa-bullseye"></i></a>
    </div>
    );
  }
}

export default Home;
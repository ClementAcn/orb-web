import React, { Component } from 'react';
import './App.css';
//import Button from '@material-ui/core/Button';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

let localisationUser;
let latitude;
let longitude;

const MyMapComponent = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyC_iCiEk0f4se1zRznMoT6Ex_ZWjj7SBWo&callback=initMap",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div className="blockMap" />,
        mapElement: <div style={{ height: `100%` }} />
    }), withScriptjs, withGoogleMap
)(props => (
    <GoogleMap defaultZoom={11} defaultCenter={{ lat: 47.214262, lng: -1.551431 }}>
        {localisationUser}
    </GoogleMap>
));

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        latitude: 0,
        longitude: 0,
        user: [],
        points: []
    };
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
    localisationUser = this.state.user.map((user) => {
        // console.log(user.nom + "  :  " + user.localisation)
        // console.log(Object.values(user.localisation)[0]);
        latitude = Object.values(user.localisation)[0];
        longitude = Object.values(user.localisation)[1];
        return (
            <Marker onClick={this.test.bind(this, user)} label={user.nom} position={{ lat: latitude, lng: longitude }} />
        )
    });

    return (
    <div className="row col-xl-11 m-auto ">
      {localisationUser}      
      <MyMapComponent isMarkerShown />
    </div>
    );
  }
}

export default MapContainer;
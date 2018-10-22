import React, { Component } from 'react';
import './App.css';
//import Button from '@material-ui/core/Button';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// let localisationUser;
// let latitude;
// let longitude;

const MyMapComponent = compose(
  withProps({
      googleMapURL:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyBetIPhBYycYZYvXxuTfeVUdgiXhe9cCOc&callback=initMap",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div class="blockMap" />,
      mapElement: <div style={{ height: `100%` }} />
  }), withScriptjs, withGoogleMap
)(props => (
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 47.206062, lng: -1.539438 }}>
      <Marker position={{ lat: 47.206062, lng: -1.539438 }} />
  </GoogleMap>
));

class Home extends Component {
  render() {
  //   localisationUser = this.state.user.map((user) => {
  //     // console.log(user.nom + "  :  " + user.localisation);
  //     // console.log(Object.values(user.localisation)[0]);
  //     latitude = Object.values(user.localisation)[0];
  //     longitude = Object.values(user.localisation)[1];
  //     return (
  //         <Marker onClick={this.test.bind(this, user)} label={user.nom} position={{ lat: latitude, lng: longitude }} />
  //     )
  // });
    return (
    <div class="row col-xl-11 m-auto ">
      <MyMapComponent isMarkerShown />
    </div>
    );
  }
}

export default Home;
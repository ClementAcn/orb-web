import React, { Component } from 'react';
import './App.css';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

let Nantes = { lat: 47.214262, lng: -1.551431 };
let localisationUser;

const MyMapComponent = compose(
    withProps({
        googleMapURL:
            //"https://maps.googleapis.com/maps/api/js?key=AIzaSyC_iCiEk0f4se1zRznMoT6Ex_ZWjj7SBWo&callback=initMap",
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyC_iCiEk0f4se1zRznMoT6Ex_ZWjj7SBWo&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div className="blockMap" />,
        mapElement: <div style={{ height: `100%` }} />
    }), withScriptjs, withGoogleMap
    )(props => (
        <GoogleMap defaultZoom={11} defaultCenter={Nantes}>
        </GoogleMap>
    ));

class MapContainer extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      currentLatLng: {
        lat: 0,
        lng: 0
      },
      isMarkerShown: false
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }


  showCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState(prevState => ({
            currentLatLng: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            isMarkerShown: true
          }))
        }
      )
    } else {
      console.log("error");
    }
  }

  componentDidMount(){
    this.showCurrentLocation();
    console.log(this.state.currentLatLng);
    return {lat : this.state.currentLatLng.lat, lng : this.state.currentLatLng.lng};
  }

  render() {

    localisationUser = (props) => {
      this.componentDidMount();
      console.log("test");
      return (
        <Marker label="Moi" position={{ lat: this.state.currentLatLng.lat, lng: this.state.currentLatLng.lng }} />
      );
    }

    return (
    <div>     
    {/* <Fab variant="extended" aria-label="Delete" >
        <NavigationIcon onClick={this.componentDidMount} />
    </Fab> */}
      <MyMapComponent 
          isMarkerShown={this.state.isMarkerShown} />
    </div>
    );
  }
}

export default MapContainer;
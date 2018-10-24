import React, { Component } from 'react';
import './App.css';
//import Button from '@material-ui/core/Button';
// import { compose, withProps } from "recompose";
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

let localisationUser;
let latitude;
let longitude;

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        latitude: 0,
        longitude: 0,
        user: []
    };
  }

  componentDidMount() {
      // eslint-disable-next-line
    var map = new Map({
        view: new View({
            center: [0, 0],
            zoom: 2
        }),
        layers: [
            new Tile({
                source: new OSM()
            })
        ],
        target: 'map'
    });
  }

  render() {
    localisationUser = this.state.user.map((props) => {
        this.setState({user : props});
       // console.log(user.nom + "  :  " + user.localisation);
       
       latitude = this.props.latitudeValue;
       longitude = this.props.longitudeValue;
       console.log("MapProps = Lat : " + latitude + " | long : " + longitude);
       return(
           <div>LOCALISER</div>
       )
    });

    return (
    <div className="row col-xl-11 m-auto ">
      {/* <MyMapComponent isMarkerShown /> */}
      <div className="col-xl-9 m-auto" id="map"></div>
      {localisationUser}
    </div>
    );
  }
}

export default MapContainer;
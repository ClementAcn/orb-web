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
import {fromLonLat} from 'ol/proj.js';
import HEREMap from 'react-here-maps';

let localisationUser;
let latitude;
let longitude;

var nantes = fromLonLat([-1.539438, 47.206062]);

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        latitude: 0,
        longitude: 0,
        user: [],
        app_id:"vQVq81pAtztTqhhiUiPo",
        app_code:"pq0K6rte5l28rxbOhVAtPg",
        points: []
    };
  }

   componentDidMount() {
      // eslint-disable-next-line
    var map = new Map({
        view: new View({
            center: nantes,
            zoom: 14
        }),
        layers: [
            new Tile({
                source: new OSM()
            }),
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
      {localisationUser}
      {/* <div className="col-xl-11 m-auto" id="map"></div>       */}
        {/* <HEREMap 
            appId="vQVq81pAtztTqhhiUiPo"
            appCode="pq0K6rte5l28rxbOhVAtPg"
            center={{ lat: 47.206062, lng: -1.539438 }}
            zoom={14}
        />  */}
    </div>
    );
  }
}

export default MapContainer;
import React, { Component } from 'react';
import './App.css';
import { compose, withProps, lifecycle } from "recompose";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdbreact';
const { withScriptjs, withGoogleMap, GoogleMap, Marker} = require("react-google-maps");
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
const _ = require("lodash");

const MyMapComponent = compose(
  withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC_iCiEk0f4se1zRznMoT6Ex_ZWjj7SBWo&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%`}} />,
      containerElement: <div className="blockMap" />,
      mapElement: <div style={{ height: `100%`}} />
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}  
      this.setState({
        bounds: null,
        center: { lat: 47.214262, lng: -1.551431 },
        markers: [],
        onMapMounted: ref => { refs.map = ref; },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          })
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new window.google.maps.LatLngBounds();

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
            places: place
          }));
          const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
          
          this.setState({
            center: nextCenter,
            markers: nextMarkers,
          });
          console.log(places);
          this.setState({markerClick : places});       
        },         
        OnChangePlace: ref => {
          console.log("Click !")
          this.setState({placeClicked: placeClick});
        },
      })
    },
  }), 
  withScriptjs, withGoogleMap
  )(props => (
    <GoogleMap ref={props.onMapMounted} defaultZoom={12} center={props.center} onBoundsChanged={props.onBoundsChanged}>
      <SearchBox ref={props.onSearchBoxMounted} bounds={props.bounds} controlPosition={window.google.maps.ControlPosition.TOP_LEFT} onPlacesChanged={props.onPlacesChanged}>
        <input
          type="text"
          placeholder="Recherche"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `80%`,
            height: `40px`,
            marginTop: `10px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `17px`,
            outline: `none`,
            textOverflow: `ellipses`,
          }}
        />
      </SearchBox>
      {props.markers.map((marker, index) =>
        <Marker key={index} onClick={() => {
          handleClick(marker.places);
          props.OnChangePlace();
        }} 
        position={marker.position} />
      )}
    </GoogleMap>
  ));

let placeClick = [];
placeClick[1] = {"name": "Test Place", "info":"Ceci est une info Test", "website":"http://test.fr", "formatted_address":"2 rue Bidon 44000 Nantes", "formatted_phone_number": "020202020202"}
let paperClick;

function handleClick(event) {
  
  placeClick[0] = event;
  console.log(placeClick); 
}

class HomeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        latitude: 0,
        longitude: 0,
        user:[],
        isMarkerShown: false,
        markerClick : [],
        placeClicked: []
    };
  }

  render() {
    console.log(this.state.placeClick);
    paperClick = placeClick.map(function(place){
    return <Paper key={place.id} elevation={2} className="p-3 mt-2">
      <Typography variant="h5">
        {place.name}
      </Typography>
      <Typography className="mt-3">
        {place.formatted_address}
      </Typography >
      <Typography className="mt-3">
        {place.formatted_phone_number}
      </Typography>
      <Typography className="mt-3">
        {place.info}
      </Typography>
      <Typography className="mt-3">
        {place.website}
      </Typography>
      <Paper size="3" className="m-3 text-center">
        <MDBIcon className="star"
            size="2x"
            icon="star"
        />
        <MDBIcon className="star"
            size="2x"
            icon="star"
        />
        <MDBIcon className="star"
            size="2x"
            icon="star"
        />
        <MDBIcon className="star"
            size="2x"
            icon="star"
        />
        <MDBIcon class="star"
            size="2x"
            icon="star-o"
        />
      </Paper>
    </Paper>
    });     
    return (
      <MDBContainer fluid className="ml-0 my-5 py-5">
        <MDBRow >
          <MDBCol className="col-3">  
              {paperClick}
          </MDBCol>
          <MDBCol className="col-9">
            <MyMapComponent isMarkerShown={this.state.isMarkerShown} />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default HomeDetail;
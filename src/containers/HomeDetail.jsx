import React, { Component } from 'react';
import './App.css';
import { compose, withProps, lifecycle } from "recompose";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from 'mdbreact';
import StarRatings from 'react-star-ratings';
const { withScriptjs, withGoogleMap, GoogleMap, Marker} = require("react-google-maps");
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
const _ = require("lodash");

var debounce = require('lodash.debounce');
let paperClick;
let placeClick = [];

const MyMapComponent = compose(
  withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC_iCiEk0f4se1zRznMoT6Ex_ZWjj7SBWo&v=3&libraries=geometry,drawing,places",
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
        onBoundsChanged: debounce(() => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter()
          })
          let { onBoundsChange } = this.props
            if (onBoundsChange) {
              onBoundsChange(refs.map)
            }
          },
        100,
        { maxWait: 5000 }),
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


// placeClick[0] = {"name": "Test Place", "info":"Ceci est une info Test", "website":"http://test.fr", "formatted_address":"2 rue Bidon 44000 Nantes", "formatted_phone_number": "020202020202"}

placeClick[0] = [];

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
      placeClicked: [],
      rating: 0,
      commentaire: "",
      result:""
    };
    this.changeRating = this.changeRating.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.commentaire);
    console.log(placeClick !== []);
    console.log(this.state.rating);
    console.log(placeClick);
    if (this.state.commentaire !== "" || this.state.rating !== 0 || placeClick === []){
      event.preventDefault();
      fetch(`http://localhost:9191/user/login?pseudo=${this.state}&password=${this.state}`, {
          method: 'POST',
      }).then(results => {
          return results.json();
      }).then(data => {
          this.setState({ result: data });
      })
  }
}

handleObjectChange = id => {
   paperClick = placeClick.find(id)
}
  
  render() {
    paperClick = placeClick.map((place) => (
      <Paper onChange={this.handleObjectChange} key={place.id} elevation={2} className="p-3 mt-2">
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
        <Typography size="3" className="m-3 text-center">
          <StarRatings
            rating={this.state.rating}
            changeRating={this.changeRating}
            size={30}
            starHoverColor="yellow"
            starRatedColor="blue"
            numberOfStars={5}
            name='rating'
          />
        </Typography>
        <Typography className="m-3">
          <MDBInput
              label="Votre commentaire"
              type="textarea"
              rows="2"
              onChange={this.handleChange}
              name="commentaire"
              validate
              error="wrong"
              success="right"
          />
        </Typography> 
        <Typography className="m-3 text-center">
          <MDBBtn color="primary" onClick={this.handleSubmit}>Valider</MDBBtn>
        </Typography>
      </Paper>
      )
    );     
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
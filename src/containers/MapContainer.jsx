import React, { Component } from 'react';
import './App.css';
import { compose, withProps, lifecycle } from "recompose";
const { withScriptjs, withGoogleMap, GoogleMap, Marker,} = require("react-google-maps");
// import Fab from '@material-ui/core/Fab';
// import NavigationIcon from '@material-ui/icons/Navigation';
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");
const _ = require("lodash");

let localisationUser;

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
            }));
            const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
  
            this.setState({
              center: nextCenter,
              markers: nextMarkers,
            });
            console.log(places);
            this.setState({markerClick : places});
            // console.log(this.state.markerClick[0].name);
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
          <Marker key={index} onClick={this.test.bind(this)} position={marker.position} />
        )}
      </GoogleMap>
    ));

class MapContainer extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      isMarkerShown: false,
      markerClick : []
    }
  }

  test(e) {
    console.log("test1");   
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

  render() { 
    return (
    <div>
    {/* <Fab variant="extended" aria-label="Delete" >
        <NavigationIcon onClick={this.componentDidMount} />
    </Fab> */}
      <MyMapComponent isMarkerShown={this.state.isMarkerShown} />
    </div>
    );
  }
}

export default MapContainer;
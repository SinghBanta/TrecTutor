import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from '@material-ui/lab/Rating';
import useStyles from "./styles";
import mapStyles from './mapStyles';


const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key:process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
         onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
        >

        {places?.map((place,i)=>(
          <div
          className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
            >
            {
              !isDesktop ?(
                <LocationOnOutlinedIcon color="primary" fontSize="large"/>
              ):(
              <Paper elevation={3} className={classes.paper}>
                <Typography clasName={classes.typography} variant="subtitle2" gutterBottom>
                {place.name}
                </Typography>
                <img 
                  classsName={classes.pointer}
                  src={place.photo ? place.photo.images.large.url : 'https://images.hindustantimes.com/img/2023/01/10/550x309/While-the-past-year-was-about-revenge-and-revival-_1673351689949.jpg'}
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly/>
              </Paper>
              )
            }
          </div>
        
        ))}
      </GoogleMapReact>
    </div>
  );
};
export default Map;
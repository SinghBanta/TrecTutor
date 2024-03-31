import React,{ useState, useEffect } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from './api';

const App=()=> {
    const [places, setPlaces]=useState([]);
    const [coordinates,setCoordinates]=useState({lat:0,lng:0});
    const [bounds, setBounds]=useState(null);

    const [type,setType]= useState('restaurants');
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [rating,setRating]= useState('');
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(()=>{
    //     navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude} }) => {
    //         setCoordinates({lat: latitude,lng: longitude});
    //     })
    // },[]);

    useEffect(() => {
        setIsLoading(true);
        const filtered = places.filter((place) => Number(place.rating) > rating);
    
        setFilteredPlaces(filtered);
        setIsLoading(false);
      }, [rating]);


    useEffect(()=>{
        // console.log(coordinates, bounds);
        setIsLoading(true);
        getPlacesData(type)
        .then((data)=>{
            console.log(data);
            setPlaces(data);
            setFilteredPlaces([])
            setIsLoading(false);
        })
    },[type, coordinates, bounds]);

    return(
    <>
        <CssBaseline/>
        <Header />
        {<Grid container spacing={3} style={{width: '100%'}}>
            <Grid item xs={12} md={4}>
                <List 
                    isLoading={isLoading}
                    places={filteredPlaces.length ? filteredPlaces : places}
                    type={type}
                    setType={setType}
                    rating={rating}
                    setRating={setRating}
                />
            </Grid>
            <Grid item xs={12} md={8}>
            <Map
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
            />
            </Grid>
        </Grid>
        }
            
    </>
    );

}
export default App;
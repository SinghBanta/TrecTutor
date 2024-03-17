import React from 'react';
import { Box, Typography, Button,Card,CardMedia,CardContent,CardAction, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import  Rating  from '@material-ui/lab/Rating';

import useStyles from './styles';

const PlaceDetails=({place})=> {
    const classes= useStyles();

    return(
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350}}
                image={place.photo ? place.photo.image.large.url : 'https://media-cdn.tripadvisor.com/media/photo-s/0f/93/8f/53/urban-cafe.jpg'}
                title={place.name}

            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display={"flex"} justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price.level}</Typography>

                </Box>
                <Box display={"flex"} justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.Ranking}</Typography>

                </Box>
                {place?.award?.map((award) => (
                   <Box my={1} display="flex" justifyContent="space-between" alignItems="Center">
                       <img src={award.images.award} alt={award.display.name} />
                       <Typography variant="subtitle2" color="textSecondary">{award.display.name}</Typography>
                   </Box>
                ))}   
                {place?.cuisine?.map(({ name }) =>(
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}  
                {place?.address && (
                   <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                       <LocationOnIcon /> {place.address}
                   </Typography> 
                )}
                {place?.phone && (
                   <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subspacing}>
                       <PhoneIconIcon /> {place.phone}
                   </Typography> 
                )}   

                <CardAction>
                   <Button size="small" color="primary" onClick={()=> window.open(place.web_url, '_blank') }>
                       TrecTutor
                   </Button> 
                   <Button size="small" color="primary" onClick={()=> window.open(place.website, '_blank') }>
                       Website
                   </Button>

                </CardAction>     
                
                </CardContent>

        </Card>

    );
}
export default PlaceDetails;
import React from 'react';
import { useParams } from 'react-router';
import honda from './../../images/honda.jpg';
import microbus from './../../images/microbus.jpg';
import bus from './../../images/bus.jpg';
import car from './../../images/car.jpg';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Container } from '@material-ui/core';


const Destination = () => {
    
    const {booking}= useParams();
   
    return (
        <Container>
        <div>
            <h1>This is {booking} you wanted</h1>
        </div>
        
 </Container>
    );
};

export default Destination;
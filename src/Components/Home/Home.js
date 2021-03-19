import React from 'react';
import honda from './../../images/honda.jpg';
import microbus from './../../images/microbus.jpg';
import bus from './../../images/bus.jpg';
import car from './../../images/car.jpg'
import Transport from './../Transports/Transport'
import { Container, Grid } from '@material-ui/core';
    
const Home = () => {
    const transports = [
        {
            title: 'Freedom of Ride',
            imgUrl:`${honda}`,
            price: 119,
            description : 'Right Choice to avoid traffic zam in city'
        },
        {
            title: 'Economy Jargon',
            imgUrl: `${bus}`,
            price: 120,
            description : 'Suitable for office/institutional tour'
        },
        {
            title: 'Family Favorite',
            imgUrl:`${microbus}`,
            price: 130,
            description : 'Hassle free journey with comfort'
        },
        {
            title: 'Luxury Tour',
            imgUrl: `${car}`,
            price: 140,
            description : 'Level up your experience with affordable cost'
        },
    ]
    return (
        
            <div>
             <Grid container spacing={2} style={{padding : '24px'}}>
             { transports.map(transport => 
             <Grid item xs={12} md={6} lg={3}>
             <Transport transport={transport} key={transport.price}></Transport>
             </Grid>
               )
            }
            </Grid>
        </div>
        
        
    );
};

export default Home;
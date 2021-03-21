import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Container, Grid } from '@material-ui/core';
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';


const containerStyle = {
    width: '800px',
    height: '400px'
  };
  
  const position = {
    lat: 23.7461,
    lng: 90.3742
  };
  
  function Map() {
    const onLoad = marker => {
        console.log('marker: ', marker)
      }
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyBME9WMmSYz_2iXjSI_OKGCs0lMaIlyg5I"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={position}
          zoom={6}
        >
          <Marker
      onLoad={onLoad}
      position={position}
    />
        </GoogleMap>
      </LoadScript>
    )
  }
  
  
const Destination = () => {
        const [userLocation,setUserLocation] = useState({
            isVaid : false,
            location : ''
        })
    const {id}= useParams();
        const handleLocation = (e)=>{
            let destination = true;
            if(e.target.name==="start"){
                destination = e.target.value;
            }
            if(e.target.name==="end"){
                destination = e.target.value;
            }
            if(destination){
                const newLocation = {...userLocation}
                newLocation[e.target.name] = e.target.value;
                // newLocation.location.toString = e.target.value;
                newLocation.isVaid = true;
                setUserLocation(newLocation);
                console.log(newLocation)
            }
            e.preventDefault()
        }


    return (
                <Grid container style={{display : 'flex'}}>
                    <Grid item  xs={12} lg={4}>
            {userLocation.isVaid && <div> <img src="" alt=""/> <p style={{color : 'goldenrod' , fontWeight : '20px' }}>Thank you for choosing {userLocation.location} the ride {userLocation.location} . Your rider will contact you in seconds !</p> </div>}
    
     
            <form  style={{display : 'block'}} onSubmit={handleLocation}>
                <label htmlFor="Start From"> Start From</label>
                <br/>
                <input type="text" name="start" placeholder="your starting point" required/>
                <br/>
                <label htmlFor="End To">End To</label>
                <br/>
                <input type="text" name="end" placeholder="your destination" required/>
                <br/>
                
                <br/>
                <input type="submit"/>
            </form>
            </Grid>
            <Grid item xs={12} lg={8}>
            <Map></Map>
            </Grid>
            </Grid>
    );
};

export default Destination;
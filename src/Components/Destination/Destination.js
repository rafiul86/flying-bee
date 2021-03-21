import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Container, Grid } from '@material-ui/core';
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';
import fakeData from '../fakeData/fakeData'

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
            startLocation : '',
            endLocation : ''
        })
    const {id}= useParams();
        const handleLocation = (e)=>{
            let destination = true;
            if(e.target.name==="startLocation" && e.target.name==="endLocation"){
                destination = e.target.value;
            }
            if(destination){
              const newLocation = {...userLocation}
              newLocation[e.target.name] = e.target.value;
              newLocation.isVaid = true;
              setUserLocation(newLocation);
              console.log(newLocation)
          }
          e.preventDefault()
        }
        

    return (
                <Grid container style={{display : 'flex'}}>
                    <Grid item  xs={12} lg={4}>
            {userLocation.isVaid && <div> <img src="" alt=""/> <p style={{color : 'goldenrod' , fontWeight : '20px' }}>Thank you for choosing from { userLocation.startLocation} to {userLocation.endLocation} . Your rider will contact you in seconds !</p> </div>}
          
                <label for="start"><input type="text" onBlur={handleLocation} name="startLocation" id="start"  placeholder="your starting point" required/></label>
                <br/>
                <label for="end"><input type="text" onBlur={handleLocation} name="endLocation" id="end"  placeholder="your destination" required/></label>
              <input type="submit"/>
            
            </Grid>
            <Grid item xs={12} lg={8}>
            <Map></Map>
            </Grid>
            </Grid>
    );
};

export default Destination;
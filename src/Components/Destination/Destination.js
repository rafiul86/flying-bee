import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Container } from '@material-ui/core';



        
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
        <Container>
        <div>
            <h1>This is your {id}.</h1>
            {userLocation.isVaid && <div> <img src="" alt=""/> <p style={{color : 'purple' , fontWeight : '20px' }}>Thank you for choosing {userLocation.location} the ride {userLocation.location} . Your rider will contact you in seconds !</p> </div>}
        </div>
        <div id="show">   
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
        </div>
        
 </Container>
    );
};

export default Destination;
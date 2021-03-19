import React from 'react';
import './Header.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import { Grid } from '@material-ui/core';

const Header = () => {
    return (
        <div className="style-header">
            <div className="header">
            <h1 className="header-name" >FLYING BEE</h1>
            <Grid container spacing={2} style={{padding : '24px'}}>
                <nav>
                <Grid item xs={12} md={6} lg={4}> 
                <a href="/login">Login</a>
                </Grid>
                <Grid item xs={12} md={6} lg={4}> 
                <a href="/destination">Destination</a>
                </Grid>
                <Grid item xs={12} md={6} lg={4}> 
                <a href="/home"> Home</a>
                </Grid>
            </nav>
            </Grid>
            </div>
           
          
          </div>  
    );
};

export default Header;
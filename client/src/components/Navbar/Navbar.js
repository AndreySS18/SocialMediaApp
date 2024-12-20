import React from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Typography} from '@mui/material';
import { Grid } from '@mui/material';

import useStyles from './styles';
import memories from '../../images/memories.png';

const Navbar = () => {
    const classes = useStyles();

    return (
    <AppBar className={classes.appBar} position="static" color="inherit" style={{ borderRadius: 10, padding: '10px 20px' }}>
        <div className={classes.brandContainer}>

        </div>
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </Grid>
      <Grid item>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
      </Grid>
    </Grid>
    </AppBar>
  );
};

export default Navbar;
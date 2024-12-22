import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';

import useStyles from './styles';
import memories from '../../images/memories.png';

const Navbar = () => {
    const classes = useStyles();

    const user = null;

    return (
        <AppBar className={classes.appBar} position="static" color="inherit" style={{ borderRadius: 10, padding: '10px 20px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className={classes.brandContainer} style={{ display: 'flex', alignItems: 'center' }}>
                <img className={classes.image} src={memories} alt="icon" height="60" />
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center" style={{ marginLeft: '10px' }}>
                    Memories
                </Typography>
            </div>
            <Toolbar className={classes.toolbar} style={{ marginLeft: 'auto' }}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageYrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

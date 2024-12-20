import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import useStyles from './styles';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyles();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
          <Container>
            <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} md={8}>
                <div style={{ borderRadius: 0, overflow: 'hidden' }}>
                  <Posts setCurrentId={setCurrentId} />
                </div>
              </Grid>

              <Grid item xs={12} md={4}>
                <div style={{ borderRadius: 10, padding: 10 }}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </div>
              </Grid>
            </Grid>
          </Container>
        </Grow>
    );
};

export default Home;

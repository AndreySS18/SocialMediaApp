import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, ThemeProvider, createTheme } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import { Grid } from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';

const theme = createTheme({
  spacing: 5, // Настроить отступы по необходимости
});

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <ThemeProvider theme={theme}> 
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit" style={{ borderRadius: 10, padding: '10px 20px' }}>
          <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
              <img className={classes.image} src={memories} alt="icon" height="60" />
            </Grid>
            <Grid item>
              <Typography className={classes.heading} variant="h2" align="center">
                Memories
              </Typography>
            </Grid>
          </Grid>
        </AppBar>

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
      </Container>
    </ThemeProvider>
  );
};

export default App;

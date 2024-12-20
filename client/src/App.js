import React from 'react';
import { Container, AppBar, Typography, Grow, ThemeProvider, createTheme} from '@mui/material';

import { Grid2 } from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';

const theme = createTheme({
    spacing: 0, // Можно настроить, если нужно
  });

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Grid2 container alignItems="center" justifyContent="space-between">
          <Grid2 item>
            <Typography className={classes.heading} variant="h2">
              Memories
            </Typography>
          </Grid2>
          <Grid2 item>
            <img className={classes.image} src={memories} alt="icon" height="60" />
          </Grid2>
        </Grid2>
      </AppBar>
      <Grow in>
        <Container>
          <Grid2 container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid2 item xs={12} sm={7}>
              <Posts />
            </Grid2>
            <Grid2 item xs={12} sm={4}>
              <Form />
            </Grid2>
          </Grid2>
        </Container>
      </Grow>
    </Container>
    </ThemeProvider>
  );
};

export default App;
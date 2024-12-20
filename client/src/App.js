import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, ThemeProvider, createTheme} from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import { Grid2 } from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';

const theme = createTheme({
  spacing: 4, // Настроить отступы по необходимости
});

const App = () => {
  const classes = useStyles();  // Предполагается, что useStyles правильно работает
  const dispatch = useDispatch();

  // Получаем посты при монтировании компонента
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}> {/* Оборачиваем приложение в ThemeProvider */}
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Grid2 container alignItems="center" justifyContent="space-between">
            <Grid2 item="true">
              <Typography className={classes.heading} variant="h2">
                Memories
              </Typography>
            </Grid2>
            <Grid2 item="true">
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
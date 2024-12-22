import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, ThemeProvider, createTheme } from '@mui/material';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const theme = createTheme({
  spacing: 5, // Настроить отступы по необходимости
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}> 
        <Container maxWidth="lg">
          <Navbar />
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/auth" exact Component={Auth} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

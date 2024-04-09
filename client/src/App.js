import { useEffect } from 'react';
import './App.css';
import {  Button, Container, ThemeProvider } from "@mui/material";
import theme from './styles/theme';
import AppBar from './components/appbar';

function App() {

  useEffect(() => {
    document.title = "Plug - Home"
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={
          {
            background:"#fff"
          }
        }
      >
        <AppBar />
        {
        /*
          Banner
          Promotions
          Title
          Products
          Footer
          SearchBox
          AppDrawer
        */  
        }
        <Button variant='contained'>Test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;

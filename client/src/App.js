import { useEffect } from 'react';
import './App.css';
import {  Box, Container, Typography} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import AppBar from './components/appbar';
import Banner from './components/banner';
import Promotion from './components/promotions';
import Products from './components/products';

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
        <Banner/>
        <Promotion/>
        <Box display="flex" justifyContent="center" sx={{p: 4}}>
          <Typography variant='h4'>
            Products
          </Typography>
        </Box>
        <Products/>
        {
        /*
          Title
          Footer
          SearchBox
          AppDrawer
        */  
        }
      </Container>
    </ThemeProvider>
  );
}

export default App;

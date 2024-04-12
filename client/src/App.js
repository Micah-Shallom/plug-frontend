import { useEffect } from 'react';
import './App.css';
import {  Box, Container, Typography} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import AppBar from './components/appbar';
import Banner from './components/banner';
import Promotion from './components/promotions';
import Products from './components/products';
import Footer from './components/footer';
import AppDrawer from './components/drawer';
import { UIProvider } from './context/ui';
import SearchBox from './components/search';

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
        <UIProvider>
          <AppDrawer/>
          <AppBar />
          <Banner/>
          <Promotion/>
          <Box display="flex" justifyContent="center" sx={{p: 4}}>
            <Typography variant='h4'>
              Products
            </Typography>
          </Box>
          <Products/>
          <Footer/>
          <SearchBox/>
        </UIProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;

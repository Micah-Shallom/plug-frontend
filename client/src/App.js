import { useEffect } from 'react';
import './App.css';
import {  Container} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import AppBar from './components/appbar';
import Banner from './components/banner';
import Promotion from './components/promotions';

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
        {
        /*
          Promotions
          Title
          Products
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

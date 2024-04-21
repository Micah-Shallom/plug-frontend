import { useEffect } from 'react';
import './App.css';
import {  Container} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import AppBar from './components/appbar';
import Footer from './components/footer';
import AppDrawer from './components/drawer';
import { UIProvider } from './context/ui';
import SearchBox from './components/dropdown';
import { RouterProvider } from "react-router-dom";
import Router from './router';

function App() {

  


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
              <RouterProvider router={Router} />
          <Footer/>
          <SearchBox/>
        </UIProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;

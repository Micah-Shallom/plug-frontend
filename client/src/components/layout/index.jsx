import AppBar from '../appbar';
import Footer from '../footer';
import AppDrawer from '../drawer';
import SearchBox from '../dropdown';
import { ThemeProvider, Box } from "@mui/material";
import {  Outlet } from "react-router-dom";
import theme from "../../styles/theme";
import { useUIContext } from '../../context/ui';




const MainLayout = () => {
  const {openDrawer, setOpenDrawer} = useUIContext();

  const handleClick = () => {
    openDrawer && setOpenDrawer(false);
    
  }
    return (
        <ThemeProvider theme={theme}>
        <Box
          onClick={handleClick}
          maxWidth="xl"
          sx={
            {
              background:"#fff"
            }
          }
        >
            <AppDrawer/>
            <AppBar />
            {/* This renders contents from the routes */}
              <Outlet/>
            <Footer/>
            <SearchBox/>
        </Box>
      </ThemeProvider>
    )
}

export default MainLayout;
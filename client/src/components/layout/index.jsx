import AppBar from '../appbar';
import Footer from '../footer';
import AppDrawer from '../drawer';
import SearchBox from '../dropdown';
import { ThemeProvider, Box } from "@mui/material";
import {  Outlet } from "react-router-dom";
import theme from "../../styles/theme";



const MainLayout = () => {
    return (
        <ThemeProvider theme={theme}>
        <Box
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
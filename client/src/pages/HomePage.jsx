import { Box, Typography } from "@mui/material";
import Banner from "../components/banner";
import Promotion from "../components/promotions";
import Products from "../components/products";
import { useEffect } from "react";
import { products } from "../data";

const HomePage = ({title}) => {
    useEffect(() => {
        document.title = `Plug - ${title}`
      }, [title]);

    return (
        <>
            <Banner/>
            <Promotion/>
            <Box display="flex" justifyContent="center" sx={{p: 4}}>
                <Typography variant='h4'>
                Products
                </Typography>
            </Box>
            <Products data={products}/>
        </>
    )
}

export default HomePage;

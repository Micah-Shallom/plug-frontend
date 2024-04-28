import { Box,  Typography } from "@mui/material"
import Products from "../components/products";
import { productData } from "../data/product";
import PaginationOutlined from "../components/pagination";
import { BusinessContainer } from "../styles/businessStyles";
import { useUIContext } from "../context/ui";
import { useEffect } from "react";

const ProductsPage = ({data}) => {
    const {products, fetchProducts} = useUIContext();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])
    
    return (
        <BusinessContainer>
            <Box sx={{marginBottom:"30px"}}>
                <Typography variant="h4">
                    Explore Products Around 
                </Typography>
                <Typography variant="body1">
                    Browse through our wide selection of categories to find what you're looking for.
                </Typography>
            </Box>
            {products.length === 0 ? (
                <h1>Loading...</h1>
            ) : (
                console.log(products)
                // <Products data={products} />
            )}
            {/* <Products data={productData}/> */}
            <PaginationOutlined />
        </BusinessContainer>
    )
};

export default ProductsPage;
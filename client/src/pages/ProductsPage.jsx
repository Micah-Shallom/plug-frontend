import { Box,  Typography } from "@mui/material"
import Products from "../components/products";
import { productData } from "../data/product";
import PaginationOutlined from "../components/pagination";
import { BusinessContainer } from "../styles/businessStyles";
import { useUIContext } from "../context/ui";
import { useEffect } from "react";
import PlugButton from "../components/button";
import AddProduct from "../components/addProduct";
import { Link } from "react-router-dom";

const ProductsPage = ({data}) => {
    const {products, fetchProducts} = useUIContext();

    // useEffect(() => {
    //     if (!showAddProductPopup) {
    //         setShowAddProductPopup(false)
    //     }
    // }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    
    return (
        <BusinessContainer>
            <Box sx={{marginBottom:"30px", display:"flex", justifyContent:"space-between"}}>
                <Box>
                    <Typography variant="h4">
                        Explore Products Around 
                    </Typography>
                    <Typography variant="body1">
                        Browse through our wide selection of categories to find what you're looking for.
                    </Typography>
                </Box>
                <Link to="/products/add">
                    <PlugButton title={"Add Product"}/>
                </Link>
            </Box>
            <Products data={productData}/>
            <PaginationOutlined /> 
            
        </BusinessContainer>
    )
};

export default ProductsPage;
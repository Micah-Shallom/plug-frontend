import { Stack } from "@mui/material"
import { Product, ProductActionButton, ProductAddToCart, ProductFavIcon, ProductIconsWrapper, ProductImage } from "../../styles/productStyles"
import ProductDescription from "./productDescription"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from "react";

const SingleProductDesktop = ({product, matches}) => {
    const [showOptions, setShowOptions] = useState(false)
    const handleMouseEnter = () => {
        setShowOptions(true)
    }
    const handleMouseLeave = () => {
        setShowOptions(false)
    }
    return (
        <>
            <Product sx={{boxShadow: 3}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.image}/>
                <ProductFavIcon isfav={0}>
                    <FavoriteIcon/>
                </ProductFavIcon>
                {showOptions && <ProductAddToCart show={showOptions} variant="contained">Add to Cart</ProductAddToCart>}
                <ProductIconsWrapper show={showOptions}>
                    <Stack direction="column">
                        <ProductActionButton>
                            <ShareIcon color="primary"/>
                        </ProductActionButton>
                    </Stack>  
                </ProductIconsWrapper>
            </Product>
            <ProductDescription product={product} matches={matches}/>
        </>
    )
}

export default SingleProductDesktop
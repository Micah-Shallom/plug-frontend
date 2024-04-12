import { Stack } from "@mui/material"
import { Product, ProductActionButton, ProductAddToCart, ProductFavIcon, ProductIconsWrapper, ProductImage } from "../../styles/productStyles"
import ProductDescription from "./productDescription"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const SingleProduct = ({product, matches}) => {
    return (
        <>
            <Product sx={{boxShadow: 3}}>
                <ProductImage src={product.image}/>
                <ProductDescription product={product} matches={matches}/>
                <ProductIconsWrapper>
                    <Stack direction="row">
                        <ProductFavIcon isfav={0}>
                            <FavoriteIcon />
                        </ProductFavIcon>
                        <ProductActionButton>
                            <ShareIcon color="primary"/>
                        </ProductActionButton>
                    </Stack>  
                </ProductIconsWrapper>
            </Product>
            <ProductAddToCart variant="contained">Add to Cart</ProductAddToCart>
        </>
    )
}

export default SingleProduct
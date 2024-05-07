import { Stack } from "@mui/material"
import { Product, ProductActionButton, ProductAddToCart, ProductFavIcon, ProductIconsWrapper, ProductImage } from "../../styles/productStyles"
import ProductDescription from "./productDescription"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from "@mui/icons-material/FitScreen";
import Tooltip from "@mui/material/Tooltip";

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
                        <ProductActionButton>
                            <Tooltip placement="left" title="Full view">
                                <FitScreenIcon color="primary" />
                            </Tooltip>
                        </ProductActionButton>
                    </Stack>  
                </ProductIconsWrapper>
            </Product>
            <ProductAddToCart variant="contained">Add to Cart</ProductAddToCart>
        </>
    )
}

export default SingleProduct
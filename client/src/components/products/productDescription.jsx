import { Typography } from "@mui/material"
import { ProductDescriptionWrapper } from "../../styles/productStyles"

const ProductDescription = ({product, matches}) => {
    return (
        <ProductDescriptionWrapper>
            <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
                {product.name}
            </Typography>
            <Typography variant={matches ? "caption": "body1"}>
                <span style={{ textDecoration: 'line-through' }}>N</span>{product.price}
            </Typography>
        </ProductDescriptionWrapper>
    )
}
export default ProductDescription
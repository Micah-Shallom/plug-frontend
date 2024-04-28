import { Container, Grid, useMediaQuery, useTheme } from "@mui/material"
import SingleProduct from "./singleProduct"
import SingleProductDesktop from "./singleProductDesktop"

const Products = ({data}) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))

    const renderProducts = data.map(product => (
        <Grid item key={product.id} xs={4} sm={4} md={4} display="flex" flexDirection="column" alignItems="center">
           {matches ? <SingleProduct product={product} matches={matches}/> : <SingleProductDesktop product={product} matches={matches}/>} 
        </Grid>
    ))

    

    return (
        <Container>
            <Grid container justifyContent={"center"} sx={{margin: "20px 4px 10px 4px"}} spacing={{xs:1, md:2}} columns={{xs:4 ,sm:8, md:12}}>
                {renderProducts}
            </Grid>
        </Container>
    )
}

export default Products  
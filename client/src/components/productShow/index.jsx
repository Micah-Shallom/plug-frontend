import { Avatar ,Button, Grid, Link, Typography, Box } from '@mui/material';
import {  StyledAvatarSection, ProductShowImage} from '../../styles/productShowStyles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

export default function ProductShow({product}) {
    return (
      <Grid container sx={{boxShadow: "3", marginTop:"30px", marginBottom:"30px"}} spacing={0} maxWidth="lg" mx="auto" py={2}>
        <Grid p={2} item xs={12} md={6}>
            <ProductShowImage
                src={product.image}
            />
        </Grid>


        <Grid item p={5} xs={12} md={6}>
            <Box marginBottom={"40px"} >
              <Typography variant="h5" component="h1">
                {product.title}
              </Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>
                  $ {product.price}
              </Typography>
            </Box>

            <Box marginBottom={"50px"}>
              <Typography variant="h5" component="h2" marginBottom={"15px"}>
                Description
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern individual. This tee is crafted with a meticulous composition of 60% combed ringspun cotton and 40% polyester jersey, ensuring a soft and breathable fabric that feels gentle against the skin. The design of the Acme Prism T-Shirt is as striking as it is comfortable. The shirt features a unique prism-inspired pattern that adds a modern and eye-catching touch to your ensemble.
              </Typography>
            </Box>

            <Grid container direction={"column"} justifyContent="flex-start" spacing={2}>
              <Grid item>
                <Button variant="contained" size="large" endIcon={<ShoppingCart/>}>
                  Add to Cart
                </Button>
                <Button variant="outlined"sx={{marginLeft:"5px"}} size="large" endIcon={<FavoriteIcon />}>
                  Add to Wishlist
                </Button>
              </Grid>
              
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  Product Owner
                </Typography>
              </Grid>
              <Grid item alignItems="center" spacing={2}>
                <StyledAvatarSection>
                  <Avatar>
                    <AccountCircleIcon alt="Product Owner" src="/placeholder-user.jpg" />
                  </Avatar>
                  <Link href="#" color="textSecondary" underline="hover">
                    Jane Doe, Product Owner
                  </Link>
                </StyledAvatarSection>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    );
  }
  
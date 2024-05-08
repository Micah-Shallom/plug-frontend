import { Container, Grid,Stack, Typography, CardContent, ListItemText , Box, Divider, ListItemIcon, List } from '@mui/material';
import { StyledCard, ContactInfoItem } from '../../styles/businessShowStyles';
import { Colors } from '../../styles/theme';
import Products from '../products';
import { productData } from '../../data/product';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YoutubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import GlobeIcon from '@mui/icons-material/Public';
import LocateIcon from '@mui/icons-material/LocationOn';



export const BusinessShow = () => {

  return (
    <Container sx={{marginBottom:"30px"}}>
        <Grid container spacing={10}>
            <Grid item xs={12} md={12}>
                <StyledCard sx={{marginBottom: "20px"}}>
                    <CardContent>
                        <img
                        src="/images/vine.svg"
                        alt="Company Logo"
                        height="80"
                        width="80"
                        style={{ aspectRatio: '1', objectFit: 'cover', borderRadius: '50%'}}
                        />
                        <Typography variant="h3" gutterBottom component="h1">
                            Plug Vines.
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Plug Vines. is a leading provider of innovative products and
                            solutions for businesses of all sizes. With a focus on
                            quality, efficiency, and customer satisfaction, we strive to
                            be the trusted partner for our clients.
                        </Typography>
                    </CardContent>
                </StyledCard>
                <Divider/>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', flexDirection:"column", mb: 2 }}>
                    <Box sx={{ backgroundColor: Colors.light_gray, borderRadius: 2, px: 1, py: 0.5, mr: 2 }}>
                        <Typography variant="h6" color="textSecondary">
                            About the Business Owner
                        </Typography>
                    </Box>
                    <Typography variant="h3" gutterBottom component="h2">
                        Meet Micah Shallom
                    </Typography>
                </Box>
                <Typography variant="body1" gutterBottom>
                    John Doe is the founder and CEO of Plug Vines. With over 15 years of
                    experience in the industry, he has built a reputation for delivering
                    innovative solutions that help businesses thrive.
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <img
                src="/images/photo.jpg"
                alt="John Doe"
                height={550}
                width={550}
                />
            </Grid>
        </Grid>

        <Stack sx={{mt: 5}} textAlign={"center"} spacing={4} alignItems="center" justifyContent="center">
            <Stack direction="column" spacing={2}>
                <Box sx={{ backgroundColor: Colors.light_gray, borderRadius: 2, px: 1, py: 0.5, mr: 2 }}>
                    <Typography variant="h6" component="div">
                        Our Products
                    </Typography>
                </Box>
                    <Typography variant="h2" gutterBottom component="h2">
                        Explore Our Offerings
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                    Plug Vines. offers a wide range of innovative products designed to meet the needs of businesses of all sizes. From cutting-edge technology to practical solutions, we have something for everyone.
                    </Typography>
            </Stack>
            <Grid container md={12} spacing={8} sx={{ mx: 'auto', maxWidth: '5xl' }}>
                <Products data={productData.slice(0, 6)} />
            </Grid>
        </Stack>

        <Divider sx={{my: 5}}/>

        <Stack spacing={4} textAlign={"center"} alignItems="center" justifyContent="center">
          <Stack direction="column" spacing={2} width={"100%"}>
            <Box sx={{ backgroundColor: Colors.light_gray, borderRadius: 2, px: 1, py: 0.5, mr: 2 }}>
                <Typography variant="h6" component="div">
                    Contact Us
                </Typography>
            </Box>
            <Typography variant="h2" gutterBottom component="h2">
              Get in Touch
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Find out more products and services we offer. Contact us on our social media platforms or visit our website.
            </Typography>
          </Stack>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <List dense disablePadding>
                <ContactInfoItem>
                  <ListItemIcon>
                    <Typography variant="body2" component="span">
                      John Doe
                    </Typography>
                  </ListItemIcon>
                </ContactInfoItem>
                <ContactInfoItem>
                  <ListItemIcon>
                    <TwitterIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="@johndoe" />
                </ContactInfoItem>
                <ContactInfoItem>
                  <ListItemIcon>
                    <InstagramIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="@johndoe" />
                </ContactInfoItem>
                <ContactInfoItem>
                  <ListItemIcon>
                    <FacebookIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="John Doe" />
                </ContactInfoItem>
                <ContactInfoItem>
                  <ListItemIcon>
                    <YoutubeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="John Doe" />
                </ContactInfoItem>
                <ContactInfoItem>
                  <ListItemIcon>
                    <PhoneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="+1 (234) 567-890" />
                </ContactInfoItem>
                <ContactInfoItem>
                  <ListItemIcon>
                    <MailIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="john@acme.com" />
                </ContactInfoItem>
                <ContactInfoItem>
                  <ListItemIcon>
                    <GlobeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="acme.com" />
                </ContactInfoItem>
                <ContactInfoItem>
                  <ListItemIcon>
                    <LocateIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="123 Main St, Anytown USA" />
                </ContactInfoItem>
              </List>
            </Grid>
          </Grid>
        </Stack>
           
    </Container>

  );
};


import { Box, Grid, List, ListItemText, Typography,Stack } from "@mui/material"
import { Colors } from "../../styles/theme"
import { FooterTitle, SubscribeTF } from "../../styles/footerStyles"
import FaceBookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlugButton from "../button";

const Footer = () => {
    return (
        <Box sx={{
            background: Colors.shaft,
            color: Colors.white,
            p: {xs:4, md:10}, pt:12, pb:12, fontSize: {xs: "12px", md:"14px"},
            height: "auto",
        }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">About Us</FooterTitle>
                    <Typography variant="caption2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, molestias. Atque, fuga numquam. Placeat, doloribus officia voluptates totam dolores eveniet sit, aspernatur sed accusamus quis alias! In necessitatibus doloribus atque?
                    </Typography>
                    <Box sx={{mt:4, color: Colors.dove_gray}}>
                        <FaceBookIcon sx={{mr: 1}} />
                        <TwitterIcon sx={{mr: 1}}/>
                        <InstagramIcon sx={{mr: 1}}/>
                    </Box>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                About Us
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                               Privacy &amp; Policy
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Terms &amp; Conditions
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body">My Account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Login
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                               Register Business Owner
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Account
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">NewsLetter</FooterTitle>
                    <Stack>
                        <SubscribeTF color="primary" label="Email Address" variant="standard"/>
                        <PlugButton title="Subscribe" fullWidth />
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer
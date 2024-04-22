import { BusinessAvatar, BusinessCard, BusinessCardContent, BusinessCardMedia, BusinessContainer, BusinessGrid, BusinessLink } from "../../styles/businessStyles";
import { Grid, Typography , Box, Divider} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function BusinessCardWrapper({business}) {
  return (
        <Grid item xs={4} sm={4} md={4}>
          <BusinessCard>
            <Box sx={{"padding":"10px"}}>
              <BusinessCardMedia
                component="img"
                image="https://source.unsplash.com/400x600/?business"
                alt="Business Photo"
              />

              <BusinessCardContent sx={{"display":"flex", "flexDirection":"column", "gap":"10px"}}>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    {business.title}
                  </Typography>
                  <Typography variant="caption2" gutterBottom>
                    {business.description}
                  </Typography>
                </Box>

                <Box sx={{"display":"flex", "flexDirection":"row","alignItems":"center"}}>
                  <BusinessAvatar sx={{"marginRight":"10px"}}>
                    <AccountCircleIcon />
                  </BusinessAvatar>
                  <span>{business.ownerName}</span>
                </Box>
              </BusinessCardContent>
            </Box>
            <Divider />
            <BusinessLink href="#" underline="none">
              See business <ArrowRightIcon />
            </BusinessLink>

          </BusinessCard>
        </Grid>
  );
}

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

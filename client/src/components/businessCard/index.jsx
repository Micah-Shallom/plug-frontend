import { BusinessAvatar, BusinessCard, BusinessCardContent, BusinessCardMedia,  BusinessLink } from "../../styles/businessStyles";
import { Grid, Typography , Box, Divider} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";


export default function BusinessCardWrapper({business}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/business/${business.id}`)
  }


  return (
        <Grid item xs={4} sm={4} md={4}>
          <BusinessCard>
            <Box sx={{"padding":"10px"}}>
              <BusinessCardMedia
                component="img"
                image="https://source.unsplash.com/random?wallpapers"
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
            <BusinessLink href="#" underline="none" onClick={handleClick}>
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

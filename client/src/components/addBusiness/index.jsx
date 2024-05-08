import { Container, Box, Typography, TextField, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AddBusiness() {
  return (
    <Container maxWidth="lg"> {/* Replaces main with Container */}
      <Box display="flex" minHeight="100vh" alignItem sx={{mb:2}}s="center" justifyContent="center" bgcolor="gray.100" px={4} py={12} flexDirection="column" darkMode>
        <Box spacing={4}> {/* Replaces first Box with Box */}
          <Typography variant="h3" gutterBottom component="h1" align="center">
            Create a New Business
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            Fill out the form to add a new business to your account.
          </Typography>
          <Grid container component={"form"} sx={{my: 5}}>
            <Grid item sx={{mb:2}} xs={12} md={12}>
                <TextField
                    label="Business Name"
                    id="business-name"
                    placeholder="Enter the business name"
                    required
                    fullWidth
                />
            </Grid> 
            <Grid item sx={{mb:2}} xs={12} md={12}>
                <TextField
                    label="Business Description"
                    id="business-description"
                    placeholder="Describe your business"
                    required
                    multiline
                    minRows={4}
                    fullWidth
                />
            </Grid> 
            <Grid item sx={{mb:2}} xs={12} md={12}>
                <TextField
                    label="Owner's Name"
                    id="owner-name"
                    placeholder="Enter the owner's name"
                    required
                    fullWidth
                />
            </Grid> 
            <Grid item sx={{mb:2}} xs={12} md={12}>
                <TextField
                    label="Owner's Bio"
                    id="owner-bio"
                    placeholder="Provide a brief bio for the owners"
                    required
                    multiline
                    minRows={4}
                    fullWidth
                />
            </Grid> 
            <Grid item sx={{mb:2}} xs={12} md={12}>
                <Box>
                    <Typography variant="body2">Business Image</Typography>
                    <Box className="flex item sx={{mb:2}}s-center gap-2">
                    <TextField type="file" id="business-image" required fullWidth />
                    <Typography variant="caption" color="textSecondary">
                        Upload image or drag and drop
                    </Typography>
                    </Box>
                </Box>    
            </Grid> 
            <Grid item sx={{mb:2}} xs={12} md={12}>
                <Box >
                <Typography variant="body2">Business Logo</Typography>
                <Box className="flex item sx={{mb:2}}s-center gap-2">
                  <TextField type="file" id="business-logo" required fullWidth />
                  <Typography variant="caption" color="textSecondary">
                    Upload logo or drag and drop
                  </Typography>
                </Box>
                </Box>
            </Grid>
            <Grid item sx={{mb:2}} xs={12} md={12}>
                <Link to="/business/add">
                    Click on to add contact information
                </Link>
            </Grid> 
            <Grid item sx={{mb:2}} xs={12} md={12}>
                <Button variant="contained" type="submit" fullWidth className="mt-6">
                Create Business
                </Button>    
            </Grid> 
              
              
              
              
              
            
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

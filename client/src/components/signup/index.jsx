import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import theme, { Colors } from '../../styles/theme';
import PlugButton from '../button';
import { ThemeProvider } from '@mui/material';
import { Link as RouterLink} from 'react-router-dom';
import axios from 'axios';
import supabase from '../../lib/helper/supabaseClient';
import { useEffect, useState } from 'react';
import OAuthButton from '../button/oauthButton';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Plug
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp() {

  const [Session, setSession] = useState(null);

  const handleOAuthSignUp = async (event) => {
    event.preventDefault();
    const {user, error} = await supabase.auth.signInWithOAuth({
      "provider": "github",
    });

    // troubleshoot why this is not logging 
    console.log("user")

    if (error) {  
      console.error('Error', error);
      return;
    }else{
      console.log('Github sign-in successful', user);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session ?? null);
    })

    const {data: {authListener}} = supabase.auth.onAuthStateChange((_event, session) => {
      switch (_event) {
        case 'SIGNED_IN':
          setSession(session);
          break;
        case 'SIGNED_OUT':
          setSession(null);
          break;
        default:
          break;
      }
    });

    return () => {
      if (authListener && authListener.unsubscribe) {
        authListener.unsubscribe();
      }
    }
  },[]);

  //handle submit for email and password based registration
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const email = data.get('email');
    const password = data.get('password');
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const fullName = `${firstName} ${lastName}`;

    try{
      console.log(
        'Email:', email,
        'Password:', password,
        "Full Name:", fullName

      );

    } catch (error){
      console.error('Error');
    }
  };

  return (
    <ThemeProvider theme={theme}>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, backgroundColor: Colors.primary}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Remember Me"
                />
              </Grid>
            </Grid>
            <PlugButton title="Sign Up" fullWidth />

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2" component={RouterLink}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>

           {/* oauth buttons for google authentication */}
           <OAuthButton 
              title="Google" 
              color={Colors.google} 
              fullWidth={true}
              onClick={handleOAuthSignUp}
            />
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
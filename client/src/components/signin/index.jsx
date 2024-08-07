import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';
import { Link as RouterLink } from 'react-router-dom';
import PlugButton from '../button';
import OAuthButton from '../button/oauthButton';
import { Colors } from '../../styles/theme';
import { useEffect, useState } from 'react';
import supabase from '../../lib/helper/supabaseClient';

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


export default function SignIn() {

  const [user, setUser] = useState(null);

  const handleOAuthSignIn = async (event) => {
    event.preventDefault();
    const {user, error} = await supabase.auth.signInWithOAuth({
      "provider": "github",
    });

    if (error) {  
      console.error('Error', error);
      return;
    }else{
      console.log('Github sign-in successful', user);
    }
  };

  useEffect(() => {
    const session = supabase.auth.session();

    setUser(session?.user ?? null);

    const {data: authListener} = supabase.auth.onAuthStateChange((_event, session) => {
      switch (_event) {
        case 'SIGNED_IN':
          setUser(session?.user);
          break;
        case 'SIGNED_OUT':
          setUser(null);
          break;
        default:
          break;
      }
    });

    return () => {
      authListener.unsubscribe();
    }

  },[]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <PlugButton title="Sign In" fullWidth/>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" variant="body2" component={RouterLink}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>

            {/* oauth buttons for google authentication */}
           <OAuthButton 
              title="Sign Up with Google" 
              color={Colors.google} 
              fullWidth 
              onClick={handleOAuthSignIn}
            />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
import * as React from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    roles: [],
  });
  const { firstName, lastName, username, password, roles } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleRoleSelection = (e) => {
    const { value } = e.target;
    if (roles.includes(value)) {
      // Remove the role if it's already in the array
      setInputValue({
        ...inputValue,
        roles: roles.filter((role) => role !== value),
      });
    } else {
      // Add the role if it's not in the array
      setInputValue({
        ...inputValue,
        roles: [...roles, value],
      });
    }
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = (e) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('username'),
    //   password: data.get('password'),
    // });
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3001/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      roles: [],
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
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
                  value={firstName}
                  onChange={handleOnChange}
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
                value={lastName}
                onChange={handleOnChange}
              />
              </Grid>
              <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={handleOnChange}
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
                value={password}
                onChange={handleOnChange}
              />    
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ textAlign: 'center' }}>Select Roles:</Typography>
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  {/* <Grid item>
                    <FormControlLabel
                      control={<Checkbox
                        name="Admin"
                        color="primary"
                        // checked={selectedRoles.includes('Admin')}
                        // onChange={handleRoleSelection}
                      />}
                      label="Admin"
                    />
                  </Grid> */}
                  <Grid item>
                  <FormControlLabel
                    control={<Checkbox
                      name="roles"
                      value="projectManager"
                      color="primary"
                      checked={roles.includes('projectManager')}
                      onChange={handleRoleSelection}
                    />}
                    label="Project Manager"
                  />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox
                        name="roles"
                        value="member"
                        color="primary"
                        checked={roles.includes('member')}
                        onChange={handleRoleSelection}
                      />}
                      label="Member"
                    />
                  </Grid>
                  <Grid item>
                  <FormControlLabel
                    control={<Checkbox
                      name="roles"
                      value="nonMember"
                      color="primary"
                      checked={roles.includes('nonMember')}
                      onChange={handleRoleSelection}
                    />}
                    label="Non-Member"
                  />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="http://localhost:3000/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
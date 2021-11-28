import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, authError, isLoading, signInWithGoogle } = useAuth();

  // using these two hooks to redirect the user
  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 10 }} xs={12} md={6}>
          <Typography variant="h4" color="primary">
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              variant="standard"
              type="email"
              name="email"
              onBlur={handleOnChange}
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="filled-basic"
              label="Your Password"
              variant="filled"
              type="password"
              name="password"
              onChange={handleOnChange}
            />
            <Button
              type="submit"
              sx={{ width: "75%", m: 1 }}
              variant="contained"
            >
              Login
            </Button>
            {/* go to register component  */}
            <Link style={{ textDecoration: "none" }} to="register">
              <Button>New User? Please Register</Button>
            </Link>

            {/* Spinner  */}
            {isLoading && <CircularProgress />}

            {/* Login Alert  */}
            {user?.email && (
              <Alert severity="success">You Logged in Successfully</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
          <p>----------------------------------------------</p>
          <Button onClick={handleGoogleSignIn} variant="contained">
            Google Sign In
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;

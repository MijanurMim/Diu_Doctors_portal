import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import login from "../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();

  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your Password Did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);

    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 10 }} xs={12} md={6}>
          <Typography variant="h4" color="primary">
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                variant="standard"
                name="name"
                type="text"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                variant="standard"
                name="email"
                type="email"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="filled-basic"
                label="Your Password"
                variant="filled"
                type="password"
                name="password"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="filled-basic"
                label="Re-Type Your Password"
                variant="filled"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
              />
              <Button
                type="submit"
                sx={{ width: "75%", m: 1 }}
                variant="contained"
              >
                Register
              </Button>
              {/* go to register component  */}
              <Link style={{ textDecoration: "none" }} to="/login">
                <Button>All Ready Registered? Please Log in</Button>
              </Link>
            </form>
          )}
          {user?.email && (
            <Alert severity="success">User Created Successfully</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;

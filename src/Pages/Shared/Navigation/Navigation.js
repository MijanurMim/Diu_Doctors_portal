import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Diu Doctors Portal
          </Typography>

          {/* go to appointment  */}
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">Home</Button>
          </Link>

          {/* go to appointment  */}
          <Link
            to="/appointment"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Appointment</Button>
          </Link>

          {user?.email ? (
            <Box>
              {/* Dashboard  */}
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit">Dashboard</Button>
              </Link>

              {/* Logout area  */}
              <Button
                onClick={logout}
                style={{ textDecoration: "none", color: "white" }}
              >
                Log Out
              </Button>
            </Box>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;

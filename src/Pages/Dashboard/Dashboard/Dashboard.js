import AdminPanelSettingsTwoToneIcon from "@mui/icons-material/AdminPanelSettingsTwoTone";
import BookmarkAddedTwoToneIcon from "@mui/icons-material/BookmarkAddedTwoTone";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Button, Paper } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin.js";

const drawerWidth = 200;

// main function starts here
function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const { admin, user } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Paper
        elevation="0"
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <Avatar sx={{ width: "100px", height: "100px" }}>
          <img src={user?.photoURL} alt="" srcset="" />
        </Avatar>
        <Typography variant="h6" color="secondary">
          {user.displayName}
        </Typography>
      </Paper>
      <Toolbar />
      <Divider />
      <Link to="/home" style={{ textDecoration: "none" }}>
        <Button sx={{ width: "100%" }} variant="outlined" color="secondary">
          <HomeTwoToneIcon />
          <Button color="secondary">HOME</Button>
        </Button>
      </Link>

      {/* go to appointment  */}
      <Link to="/appointment" style={{ textDecoration: "none" }}>
        <Button sx={{ width: "100%" }} variant="outlined" color="secondary">
          <BookmarkAddedTwoToneIcon></BookmarkAddedTwoToneIcon>
          <Button color="secondary">APPOINTMENT</Button>
        </Button>
      </Link>

      {/* Nesting area  */}
      <Link to={`${url}`} style={{ textDecoration: "none" }}>
        <Button sx={{ width: "100%" }} variant="outlined" color="secondary">
          <DashboardTwoToneIcon></DashboardTwoToneIcon>
          <Button color="secondary">DASHBOARD</Button>
        </Button>
      </Link>

      {/* if user is admin  */}
      {admin && (
        <Box>
          <Link to={`${url}/makeAdmin`} style={{ textDecoration: "none" }}>
            <Button sx={{ width: "100%" }} variant="outlined" color="secondary">
              <AdminPanelSettingsTwoToneIcon></AdminPanelSettingsTwoToneIcon>

              <Button color="secondary">MAKE ADMIN</Button>
            </Button>
          </Link>
        </Box>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* Dashboard Routing  */}
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>

          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;

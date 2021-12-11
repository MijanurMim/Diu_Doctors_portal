import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import bg from "../../../images/bg.png";
import chair from "../../../images/chair.png";

const bannerBg = {
  background: `url(${bg})`,
};
const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ ...verticalCenter, textAlign: "left" }}>
          <Box>
            <Typography variant="h2">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography variant="h6" sx={{ my: 4, color: "gray" }}>
              We have the best experienced doctors of our country to give you
              the best treatments. So that you can enjoy a healthy life.
            </Typography>
            {/* go to appointment  */}
            <Link to="/appointment" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                Appointment
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "400px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;

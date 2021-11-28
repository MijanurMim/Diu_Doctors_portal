import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
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
            <Typography
              variant="h6"
              sx={{ my: 4, fontSize: 13, fontWeight: 300, color: "gray" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              velit dicta in porro autem. Expedita nemo repellat corporis fuga
              esse.
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: "#5CE7ED" }}>
              Get Appointment
            </Button>
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

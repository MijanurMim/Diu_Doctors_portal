import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bg from "../../../images//appointment-bg.png";
import doctor from "../../../images/doctor.png";

// custom background  styling
const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45,58,74,0.6)",
  backgroundBlendMode: "darken,luminosity",
  marginTop: 160,
};

// main function
const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 400, marginTop: "-110px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",

            textAlign: "left",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ color: "#5CE7ED", mb: 5 }}>
              Appointment
            </Typography>
            <Typography variant="h4" sx={{ color: "white" }}>
              Make An Appointment Today
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "white", fontSize: 14, fontWeight: 300, my: 5 }}
            >
              We have the best experienced doctors of our country to give you
              the best treatments. So that you can enjoy a healthy life.
            </Typography>
            <Button variant="contained" sx={{ backgroundColor: "#5CE7ED" }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;

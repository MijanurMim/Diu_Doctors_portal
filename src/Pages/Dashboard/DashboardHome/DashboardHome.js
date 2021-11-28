import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import Calender from "../../Shared/Calender/Calender";
import AppointmentsConfirmed from "../AppointmentsConfirmed/AppointmentsConfirmed";

const DashboardHome = () => {
  const [date, setDate] = useState(new Date());
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Calender date={date.toDateString()} setDate={setDate}></Calender>
      </Grid>
      <Grid item xs={12} sm={8}>
        <AppointmentsConfirmed date={date}></AppointmentsConfirmed>
      </Grid>
    </Grid>
  );
};

export default DashboardHome;

import { Alert, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Bookings from "../Bookings/Bookings";
const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "8:00 - 9:00",
    space: "10 spaces available",
    price: 20,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "10:00 AM - 11:30 AM",
    space: "10 spaces available",
    price: 40,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "5:00 PM - 9:00 PM",
    space: "10 spaces available",
    price: 60,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "7:00 AM - 9:00 AM",
    space: "10 spaces available",
    price: 10,
  },
  {
    id: 5,
    name: "Root Canal",
    time: "8:00 AM - 9:00 AM",
    space: "10 spaces available",
    price: 90,
  },
  {
    id: 6,
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: "10 spaces available",
    price: 110,
  },
];

const AvailableAppointment = ({ date }) => {
  const [appointmentSuccess, setAppointmentSuccess] = useState(false);
  return (
    <Container>
      <Typography variant="h4" sx={{ color: "info.main", my: 4 }}>
        Available Appointments on {date.toDateString()}
      </Typography>
      {appointmentSuccess && (
        <Alert severity="success">Your Appointment is Successful</Alert>
      )}
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Bookings
            key={booking.id}
            booking={booking}
            date={date}
            setAppointmentSuccess={setAppointmentSuccess}
          ></Bookings>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;

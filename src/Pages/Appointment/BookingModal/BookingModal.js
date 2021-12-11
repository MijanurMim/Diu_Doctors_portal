import { Button, TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openBooking,
  handleBookingClose,
  booking,
  date,
  setAppointmentSuccess,
}) => {
  const { name, space, time, price } = booking;
  const { user } = useAuth();

  // if user dosent change the info then the default info will be set
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    // console.log(newInfo);
    setBookingInfo(newInfo);
  };

  // Appointment submit
  const handleBookingSubmit = (e) => {
    alert("Confirming Your Appointment");

    // Collect data
    const appointment = {
      ...bookingInfo,
      time,
      price,
      serviceName: name,
      date: date.toLocaleDateString(),
    };
    console.log(date);
    // sending data to the server
    fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setAppointmentSuccess(true);
          handleBookingClose();
        }
      });

    e.preventDefault();
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {space}
          </Typography>
          <form onSubmit={handleBookingSubmit}>
            <TextField
              disabled
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              size="small"
              defaultValue={time}
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              size="small"
              name="patientName"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              size="small"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              size="small"
              name="phone"
              onBlur={handleOnBlur}
              placeholder="Phone Number"
            />
            <TextField
              disabled
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              size="small"
              defaultValue={date.toDateString()}
            />
            <Button type="submit" variant="contained">
              CONFIRM APPOINTMENT
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;

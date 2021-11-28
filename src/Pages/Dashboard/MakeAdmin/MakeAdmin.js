import { Alert, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleAdminInput = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };

    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },

      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("You Want to make this user admin");
          console.log(data);

          setSuccess(true);
        }
      });

    e.preventDefault();
  };

  return (
    <Container>
      <h2>Make me Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "60%" }}
          id="standard-basic"
          label="Email"
          type="email"
          variant="standard"
          onBlur={handleAdminInput}
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {/* Login Alert  */}
      {success && <Alert severity="success">Made Admin Successfully</Alert>}
    </Container>
  );
};

export default MakeAdmin;

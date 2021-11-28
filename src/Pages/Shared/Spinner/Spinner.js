import { CircularProgress, Container } from "@mui/material";
import React from "react";
const Spinner = () => {
  return (
    <Container>
      <div sx={{ display: "flex" }}>
        <CircularProgress />
      </div>
    </Container>
  );
};

export default Spinner;

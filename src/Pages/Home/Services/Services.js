import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import cavity from "../../../images/cavity.png";
import flouride from "../../../images/fluoride.png";
import whitening from "../../../images/whitening.png";
import Service from "../Service/Service";

const services = [
  {
    name: "Fluoride Treatment ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptates soluta in saepe repellat porro sint facilis error unde, iusto vero, animi sit qui fuga odio incidunt amet provident quibusdam!",
    img: flouride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptates soluta in saepe repellat porro sint facilis error unde, iusto vero, animi sit qui fuga odio incidunt amet provident quibusdam!",
    img: cavity,
  },
  {
    name: "Teath Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptates soluta in saepe repellat porro sint facilis error unde, iusto vero, animi sit qui fuga odio incidunt amet provident quibusdam!",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography color="primary" variant="h6" component="div" sx={{ m: 2 }}>
          Our Services
        </Typography>
        <Typography
          color="secondary"
          variant="h4"
          component="div"
          sx={{ fontWeight: "bold", m: 2 }}
        >
          Services We Provide
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service, index) => (
            <Service key={index} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

import { Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { common } from "@mui/material/colors";
import React from "react";
import ContactCard from "./ContactCard";

const data = [
  {
    name: "Jessamyn Smith",
    job: "Experienced Full-Stack Web Developer",
  },
  {
    name: "Daniel Hamilton",
    job: "Senior Software Engineer @ Indeed",
  },
  {
    name: "Martijn Pieters",
    job: "#1 Stack Overflow Python Answerer",
  },
  {
    name: "Ionica Bizau",
    job: "Full-Stack Developer",
  },
  {
    name: "Miroslav Kutak",
    job: "Senior IOS Developer",
  },
  {
    name: "Ben Gottlieb",
    job: "Senior IOS Developer and Consultant",
  },
];
export default function Contacts() {
  return (
    <Stack
      alignItems={"center"}
      sx={{ backgroundColor: "#005672", paddingY: "80px" }}
    >
      <Typography
        variant="h4"
        component="p"
        color={common.white}
        textAlign={"center"}
        fontWeight={"500"}
      >
        Connect with <br /> 12000+ top developers anytime
      </Typography>
      <Grid container margin={5} spacing={4} sx={{width: { xs: "100%", lg: "80%" },padding:5 }}>
        {data.map((item, index) => (
          <ContactCard key={item.name} item={item} index={index} />
        ))}
      </Grid>

      <Typography
        variant="h6"
        component="p"
        color={common.white}
        textAlign={"center"}
        fontWeight={"500"}
        margin={3}
      >
        Start working with our developers
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          padding: "10px 20px",
          backgroundColor: "#FF6B54",
          fontWeight: "bold",
        }}
      >
        Get Started
      </Button>
    </Stack>
  );
}

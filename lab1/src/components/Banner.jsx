import { Box, Button, Stack, Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import React from "react";
import heroImg from "../assets/images/hero-l.png";
export default function Banner() {
  return (
<Box textAlign={"center"} position={"relative"} marginBottom={25}>
    <Stack
    flexGrow={1}
      flexDirection={"column"}
      alignItems={"center"}     
      sx={{ backgroundColor: "#005672", padding: "50px",paddingBottom:"300px" }}
    >
      <Typography
        variant="h2"
        color={common.white}
        textAlign={"center"}
        fontWeight={"500"}
        marginY={5}
      >
        Find a developer for <br/>live mentorship & freelance projects
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
        GET HELP NOW
      </Button>
     
    </Stack>
<img
src={heroImg}
height={"400px"}
style={{ position: "absolute", bottom: "-132px",left:"calc((100% - 775px )/2)"}}
/>
</Box>
     
  );
}

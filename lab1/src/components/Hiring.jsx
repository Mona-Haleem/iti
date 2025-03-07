import React from "react";
import hireImg from "../assets/images/visit-arc (1).svg";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

export default function Hiring() {
  return (
    <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} gap={20}>
      <img src={hireImg} />
      <Stack justifyContent={"center"} alignItems={"start"}>
        <Typography variant="h6" color="#000" fontWeight={"bold"}>
          arc()
        </Typography>
        <Typography
          variant="h4"
          color="#005672"
          fontWeight={"bold"}
          marginBottom={3}
        >
          Hiring for a bigger project?
        </Typography>
        <Typography variant="body2" marginBottom={3}>
          Arc helps ypu find senior developers for both permanent full-time
          roles and 40+ hour contract project.
        </Typography>
        <Button
          endIcon={<ArrowForwardOutlinedIcon />}
          sx={{ padding: 0, textTransform: "none", fontWeight: "bold" }}
        >
          Visit Arc to learn more
        </Button>
      </Stack>
    </Box>
  );
}

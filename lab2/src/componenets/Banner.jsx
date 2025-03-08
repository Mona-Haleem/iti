import {
  Badge,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export default function Banner() {
  return (
    <Card sx={{ position: "relative" }}>
      <Badge
        badgeContent={
          <Stack flexDirection={"row"} alignItems={"center"}>
            <Typography variant="caption" className="badgeIcon">
              ℗
            </Typography>
            <Typography variant="caption" marginLeft={1}>
              Save
            </Typography>
          </Stack>
        }
        color="error"
        anchorOrigin={{
          horizontal: "left",
        }}
        sx={{
          position: "absolute",
          left: "35px",
          top: "20px",
        }}
      ></Badge>
      <CardMedia component="img" image="/assets/Banner.jpg" alt="banner" />
      <CardContent className="overlay-header">
        <Typography variant="h3" sx={{ textTransform: "uppercase" }}>
          Labour day: enjoy 20% off EQ3
        </Typography>
        <Typography variant="body1" marginY={5}>
          Save on designs made with longievity in mind. Now until September 3rd.
        </Typography>
      </CardContent>
    </Card>
  );
}

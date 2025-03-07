import React from "react";
import { Avatar, Card, CardContent,Typography} from "@mui/material";
import Grid from '@mui/material/Grid2';

export default function ContactCard({item, index}) {
  return (
    <Grid size={4}>
      <Card
        sx={{
          display: "flex",
          minHeight: "150px",
          alignItems: "center",
          gap: "10px",
          padding: "20px",
          position: "relative",
          top: index % 3 != 1 ? "20px" : 0,
        }}
      >
        <Avatar sx={{ width: "80px", height: "80px" }}></Avatar>

        <CardContent>
          <Typography variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2">{item.job}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

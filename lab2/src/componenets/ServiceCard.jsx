import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export default function ServiceCard({ item, imgPosition }) {
  return (
    <Card
      sx={{
        display: "flex",
        margin: 2,
        gap: 2,
        backgroundColor:"#FAFAFA",
        boxShadow:"none",
        flexWrap: { sm: "wrap", md: "nowrap" },
        flexDirection:(imgPosition == "left")?"row" :"row-reverse"
      }}
    >
      <CardMedia
        component="img"
        image={item.imgSrc}
        alt={item.title}
        sx={{ width:{sm:"100%",md:"50%"} }}
      />
      <Stack justifyContent={"center"} sx={{width:"100%"}}>
        <CardContent sx={{maxWidth:"600px" , marginX:"auto"}}>
          <Typography
            gutterBottom
            variant="h4"
            sx={{ textTransform: "uppercase" }}
          >
            {item.title}
          </Typography>
          <Typography variant="body1" marginY={5}>{item.body}</Typography>
          <Button
            size="small"
            variant="contained"
            disableElevation
            sx={{ backgroundColor: "black" }}
          >
            {item.btnText}
          </Button>
        </CardContent>
      </Stack>
    </Card>
  );
}

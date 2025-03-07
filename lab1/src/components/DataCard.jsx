import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';


export default function DataCard({ header, dataList, btnText }) {
  return (
    <Box sx={{maxWidth:"400px"}}>
      <Typography variant="h4" color="#005672" fontWeight={"bold"}>
        {header}
      </Typography>
      <List>
        {dataList.map((item) => (
          <ListItem key={item}>
            <ListItemIcon sx={{color:"#3097B0",minWidth:"30px"}}>
                <BugReportOutlinedIcon/>
            </ListItemIcon>
            <ListItemText sx={{ color: "#64788B" }} primary={item} />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        size="large"
        sx={{
          padding: "10px 20px",
          backgroundColor: "#FF6B54",
          fontWeight: "bold",
        }}
      >
        {btnText}
      </Button>
    </Box>
  );
}

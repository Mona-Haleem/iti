import React from "react";
import Banner from "../componentes/Home/Banner";
import { Box, Typography } from "@mui/material";
import ProductsList from "../componentes/ProuductsList";

const Home = () => {
  return <Box>
    <Banner/>
    <Typography variant="h3"> Featured Products </Typography>
    <ProductsList horizentalScroll={true}/>
  </Box>;
};

export default Home;

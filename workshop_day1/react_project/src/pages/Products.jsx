import React from "react";
import ProductsList from "../componentes/ProuductsList";
import ProductsFilter from "../componentes/Sidebar/ProductsFilter";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const Products = () => {
  const theme = useTheme();
  const currStyle = {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    width:"100%"
  };
  return (
    <Box sx={currStyle} className="flex flex-1">
      <ProductsFilter />
      <Box className={"flex-1"}>
        <Typography variant="h3" sx={{marginLeft:"20px"}}> Products </Typography>
        <ProductsList />
      </Box>
    </Box>
  );
};

export default Products;

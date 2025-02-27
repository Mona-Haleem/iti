import { memo, useContext } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import ProductsFilter from "./ProductsFilter";

const Sidebar = () => {
  const theme = useTheme(); 
  const currStyle = {
    BorderColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  };
  return (
    <aside >
        <Box sx={currStyle}>
          <ProductsFilter/>
        </Box>
    </aside>
  );
};

export default memo(Sidebar);
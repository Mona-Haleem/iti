import { memo, useContext } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const Sidebar = () => {
  const theme = useTheme(); 
  const currStyle = {
    BorderColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  };
  return (
    <aside >
        <Box sx={currStyle}>
          sideBar
        </Box>
    </aside>
  );
};

export default memo(Sidebar);
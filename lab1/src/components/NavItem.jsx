import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Typography } from '@mui/material';

export default function NavItem({label}) {
  return (
    <Box display={"flex"} alignItems={"center"}>
        <Typography variant="subtitle1" component={'span'}>{label}</Typography>
        <KeyboardArrowDownIcon />
    </Box>
  )
}

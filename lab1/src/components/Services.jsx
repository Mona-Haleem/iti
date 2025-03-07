import React from 'react'
import { Box } from "@mui/material";
import DataCard from "./DataCard";
import mentorship from "../assets/images/mentorship.jpg";
import freelanceJob from "../assets/images/freelance-job.png";
import Hiring from './Hiring';
export default function Services() {
  return (
    <Box component={"main"}>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          gap={15}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <DataCard
            header="One-on-one live mentorship"
            dataList={[
              "Debug with the help of an expert",
              "Personalize your learning experience",
              "Get answers to complex problems",
            ]}
            btnText="Find a mentor"
          />
          <img src={mentorship} />
        </Box>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          margin={5}
          gap={10}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img src={freelanceJob} />
          <DataCard
            header="Project-based freelance work"
            dataList={[
              "Find experts for on-demand code review",
              "Build features for your existing product",
              "Turn your idea into an MVP",
            ]}
            btnText="Find a freelancer"
          />
        </Box>
        <Hiring/>
      </Box>
  )
}








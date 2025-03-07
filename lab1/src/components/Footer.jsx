import React from "react";
import {
  Box,
  Typography,
  Link,
  Container,
  Stack,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

function Footer() {
  return (
    <Stack component="footer" sx={{ bgcolor: "#000", color: "white", p: 5 }}>
      <Grid
        container
        spacing={4}
        sx={{ width: { xs: "100%", lg: "80%" }, margin: "auto" }}
      >
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h6" gutterBottom>
            PRODUCTS
          </Typography>
          <Typography color="inherit" variant="body1">
            Codementor
          </Typography>
          <Typography color="#ccc" variant="body2" marginBottom={1}>
            Find a mentor to help you in real time
          </Typography>
          <Typography color="inherit" variant="body1">
            Codementor Events
          </Typography>
          <Typography color="#ccc" variant="body2" marginBottom={1}>
            Attend and host virtual events for developers
          </Typography>
          <Typography color="inherit" variant="body1">
            DevProjects
          </Typography>
          <Typography color="#ccc" variant="body2" marginBottom={1}>
            Learn programming by building projects
          </Typography>
          <Typography color="inherit" variant="body1">
            Arc
          </Typography>
          <Typography color="#ccc" variant="body2" marginBottom={1}>
            Helping empolyers find talent for remote jobs
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h6" gutterBottom>
            PAGES
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography color="#ccc" variant="body2" marginBottom={1}>
                Become a Codementor
              </Typography>
              <Typography color="#ccc" variant="body2" marginBottom={1}>
                How it works
              </Typography>
              <Typography color="#ccc" variant="body2" marginBottom={1}>
                Find Mentors
              </Typography>
              <Typography color="#ccc" variant="body2" marginBottom={1}>
                Find Freelancers
              </Typography>
              <Typography color="#ccc" variant="body2" marginBottom={1}>
                Find a Tutor
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography color="#ccc" variant="body2" marginBottom={1}>
                Community
              </Typography>
              <Typography color="#ccc" variant="body2" marginBottom={1}>
                Blog
              </Typography>
              <Typography color="#ccc" variant="body2" marginBottom={1}>
                Codementor for Students
              </Typography>
              <Typography color="#ccc" variant="body2" marginBottom={1}>
                Codementor for Teams
              </Typography>
              <Typography color="#ccc" variant="body2" marginBottom={1}>
                Code Review
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography color="#ccc" variant="body2" marginBottom={1}>
                Pair Programming
              </Typography>
              <Typography color="#ccc" variant="body2" marginBottom={1}>
                Best Web Design Software
              </Typography>
              <Typography color="#ccc" variant="body2" marginBottom={1}>
                Coding Starter Kit
              </Typography>
              <Typography color="#ccc" variant="body2" marginBottom={1}>
                Codementor Reviews
              </Typography>
              <Typography color="#ccc" variant="body2" marginBottom={1}>
                Best Language to Learn
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Divider
        color="#ccc"
        sx={{ marginY: 3, width: { xs: "100%", lg: "80%" }, marginX: "auto" }}
      />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        sx={{ width: { xs: "100%", lg: "80%" }, margin: "auto" }}
      >
        <Typography variant="body2" color="gray">
          © Copyright 2024 Codementor
        </Typography>
        <Box display={"flex"} gap={2}>
          <Typography color="#ccc" variant="body2">
            Cookie Policy
          </Typography>
          <Typography color="#ccc" variant="body2">
            Privacy Policy
          </Typography>
          <Typography color="#ccc" variant="body2">
            Terms of Service
          </Typography>
          <Typography color="#ccc" variant="body2">
            Careers
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
}

export default Footer;

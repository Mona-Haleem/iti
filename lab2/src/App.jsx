import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Banner from "./componenets/Banner";
import Categories from "./componenets/Categories";
import Header from "./componenets/Header";
import NavBar from "./componenets/NavBar";
import Service from "./componenets/Service";
import { Divider, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";

function App() {
  return (
    <>
      <Header />
      <Divider sx={{ opacity: 0.1 }}/>
      <NavBar />
      <Typography
        variant="h4"
        align="center"
        bgcolor={orange[400]}
        marginBottom={4}
        padding={1}
      >
        Labour Day: Enjoy 20% Off EQ3
      </Typography>
      <main>
        <Banner />
        <Categories />
        <Service />
      </main>
    </>
  );
}

export default App;

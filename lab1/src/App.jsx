import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import { Typography } from "@mui/material";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Typography
        variant="h4"
        component="p"
        color="#005672"
        textAlign={"center"}
        fontWeight={"bold"}
      >
        Get help from vetted software developers
      </Typography>
      <Services/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;

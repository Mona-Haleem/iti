import Header from "./components/Header.jsx"
import Navbar from "./components/Navbar.jsx";
import TopNews from "./components/TopNews.jsx";
import LatestNews from "./components/LatestNews.jsx";
import TrendingHeadlines from "./components/TrendingHeadlines.jsx";
import Footer from "./components/Footer.jsx";


const App = () => {
  return (
    <>
      <main>
        <Header></Header>
        <Navbar></Navbar>
        <TopNews></TopNews>
        <div>
          <LatestNews></LatestNews>
          <TrendingHeadlines></TrendingHeadlines>
        </div>
      </main>
      <Footer></Footer>
    </>

  );
}



export default App;

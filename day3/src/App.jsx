import Header from "./components/Header.jsx"
import Navbar from "./components/Navbar.jsx";
import TopNews from "./components/TopNews.jsx";
import LatestNews from "./components/LatestNews.jsx";
import TrendingHeadlines from "./components/TrendingHeadlines.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";


const App = () => {
  let [category , setCategory] = useState('general');
  let [keywords , setKeywords] = useState('');

  return (
    <>
      <main>
        <Header setKeywords={setKeywords}></Header>
        <Navbar setCategory={setCategory}></Navbar>
        <TopNews category={category}></TopNews>
        <div>
          <LatestNews category={category} keywords={keywords}></LatestNews>
          <TrendingHeadlines category={category}></TrendingHeadlines>
        </div>
      </main>
      <Footer></Footer>
    </>

  );
}



export default App;

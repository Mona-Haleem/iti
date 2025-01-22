import { memo, useState ,useEffect,useCallback } from "react";
import NewsController from "../controllers/NewsController";
import Card from "./DefaultCard";


const TrendingHeadlines = () => {
  let [topNews , setNews] = useState([]);
  let [error , setError] = useState([]);


  const fetchNews = useCallback(async() => {
          try {
              let news = await NewsController.getLatestNews({country:'us',category:'business',pageSize:8,category:'entertainment'});
              setNews(topNews = news);
          } catch (e) {
              console.log(e);     
              setError(error=e);
          }
          console.log(topNews);       
  },[])

  useEffect(()=>{ 
      fetchNews();
  },[])

  return (
    <section className="trendingNews">
          <header>
            <h3> Trending Headlines </h3>
            <button> view all</button>
          </header>
          { topNews.map((news) =><Card key={news.id} newsData={news}/>)}
    </section>
  );
}
  
  
export default memo(TrendingHeadlines);
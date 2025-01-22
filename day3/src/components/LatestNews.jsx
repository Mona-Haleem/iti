import { memo, useState ,useEffect ,useCallback } from "react";
import NewsController from "../controllers/NewsController";
import DescriptionCard from "./DescriptionCard";
import ImageCard from "./ImageCard";

const LatestNews = () => {
  let [topNews , setNews] = useState([]);
  let [page , setpage] = useState(1);

  let [error , setError] = useState([]);


  const fetchNews = useCallback(async(page=1) => {
          try {
              let news = await NewsController.getLatestNews({country:'us',pageSize:9,category:'general',page:page});
              if (page == 1)
                setNews(topNews = news);
              else
                setNews(topNews = [...topNews,...news]);
          } catch (e) {
              console.log(e);     
              setError(error=e);
          }
          console.log(topNews);       
  },[])

  
  useEffect(()=>{ 
      fetchNews(page);
  },[page])

  return (
    <section className="latestNews">
          <header>
              <h3>Latest News </h3>
              <div></div>
          </header>
          <div>
            {topNews.map((news,i) =>
                        ( i%2  == 0 || i == topNews.length - 1)?
                        <ImageCard key={news.id} newsData={news}/>:
                        <DescriptionCard key={news.id} newsData={news} />
                    
            )}
          </div>
          <button onClick={() => setpage(prevPage => prevPage + 1)}>View more</button>
    </section>
  );
}
  
  
export default memo(LatestNews);
import { memo, useState ,useEffect ,useCallback } from "react";
import NewsController from "../controllers/NewsController";
import DescriptionCard from "./DescriptionCard";
import ImageCard from "./ImageCard";

const LatestNews = ({category, keywords}) => {
  let [topNews , setNews] = useState([]);
  let [page , setpage] = useState(1);

  let [error , setError] = useState([]);

  console.log(keywords);
  const fetchNews = useCallback(async(page=1,query) => {
          try {
            console.log(category)
              let news = await NewsController.getLatestNews({country:'us',page:page,...query});
              if (page == 1)
                setNews(topNews = news.slice(0,8));
              else
                setNews(topNews = [...topNews,...news.slice(0,8)]);
          } catch (e) {
              console.log(e);     
              setError(error=e);
          }
          console.log(topNews);       
  },[])

  
  useEffect(()=>{ 
      fetchNews(page,{category:category , q:keywords});
  },[page,category,keywords])

  return (
    <section className="latestNews">
          <header>
              <h3>Latest News </h3>
              <div></div>
          </header>
          <div>
            {topNews.map((news,i) =>
                        ( (i - 1) % 4 == 0 || i % 4 == 0 )?
                        <ImageCard key={news.id} newsData={news}/>:
                        <DescriptionCard key={news.id} newsData={news} />
                    
            )}
          </div>
          <button onClick={() => setpage(prevPage => prevPage + 1)}>View more</button>
    </section>
  );
}
  
  
export default memo(LatestNews);
import { memo, useState ,useEffect ,useCallback} from "react";
import NewsController from "../controllers/NewsController";
import Card from "./DefaultCard";
import DescriptionCard from "./DescriptionCard";
import ImageCard from "./ImageCard";


const TopNews = ({category}) => {

    let [topNews , setNews] = useState([]);
    let [error , setError] = useState([]);


    const fetchNews =useCallback(async() => {
            try {
                let news = await NewsController.getLatestNews({country:'us',category:category});
                setNews(topNews = news.slice(0,5));
            } catch (e) {
                console.log(e);     
                setError(error=e);
            }
            console.log(topNews);       
    },[category])

    useEffect(()=>{ 
        fetchNews();
    },[category])

    let appliedCalsses = ["imgCard","fullCard","fullCard","imgCard","descriptionCard"] 

    return (
      <section className="topNews">
            {topNews.map((news,i) =>
                                    { 
                                        if (appliedCalsses[i] == 'descriptionCard')
                                            return <DescriptionCard key={news.id} newsData={news} />
                                        else if (appliedCalsses[i] == 'imgCard')
                                            return <ImageCard key={news.id} newsData={news}/>
                                        else
                                            return <Card key={news.id} newsData={news}/>
                                    }
                        )
            }
      </section>
    );
}
  
  
export default memo(TopNews);
import axios from "axios"
import NewsModel from "../models/NewsModel";

class NewsController {
    static async getLatestNews(params={}) { 
        try {
            let queryParams= NewsController.formatParams(params)
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?${queryParams}apiKey=a65e7a21ed22446cb230ed62d824319d`);
            return response.data.articles.map( news => new NewsModel(news));
        } catch (err) {
            console.log("Error", err);

        }
    }

    static formatParams(params){
        let paramStr ='';
        for(let key in params){
            paramStr+=`${key}=${params[key]}&`
        }
        return paramStr;
    }   
}


export default NewsController; 
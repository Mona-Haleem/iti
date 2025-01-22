import axios from "axios"
import NewsModel from "../models/NewsModel";

class NewsController {
    static async getLatestNews(params={}) { 
        try {
            let queryParams= NewsController.formatParams(params)
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?${queryParams}apiKey=060af38eb9694725b90eecf15848a83f`);
            console.log(response.data.articles)
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
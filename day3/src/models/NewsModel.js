import { v4 } from 'uuid';
class NewsModel {
    constructor(data) {
        this.id = v4();
        this.title = data.title;
        this.description = data.description || 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum numquam optio accusamus, ea earum magni maxime libero mollitia distinctio modi voluptas, eaque corporis repellat quibusdam est. Soluta, omnis labore? Corporis.';
        this.image_url = data.urlToImage || '/logo192.png';
        this.published = data.publishedAt;
        this.author = data.author || "Anonymous Source";
        this.url = data.url ;
    }
}


export default NewsModel

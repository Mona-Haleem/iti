import { memo } from "react";

const ImageCard  = ({newsData}) => {
  
    return (
        <div className="card imgCard">
            <img src={newsData.image_url}/>
            <h1>{newsData.title}</h1>
            <div className="publish">
          <p>By {newsData.author}</p>
          <p>
              {(new Date(newsData.published).toDateString() === new Date().toDateString()) 
                  ? "Just Now" 
                  : new Date(newsData.published).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          </div>
        </div>
    );
  }

  
  
  
export default memo(ImageCard);
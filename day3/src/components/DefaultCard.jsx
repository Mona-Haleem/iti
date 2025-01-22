import { memo } from "react";

const Card  = ({newsData}) => {
  
    return (
      <div className="card fullCard">
        <img src={newsData.image_url}/>
        <div>
          <h1>{newsData.title}</h1>
          <p className="description">{newsData.description}</p>
          <div className="publish">
          <p>By {newsData.author}</p>
          <p>
              {(new Date(newsData.published).toDateString() === new Date().toDateString()) 
                  ? "Just Now" 
                  : new Date(newsData.published).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          </div>
        </div>        
    </div>
    );
  }

  
  
  
export default memo(Card);
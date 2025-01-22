import { memo } from "react";

const DescriptionCard  = ({newsData}) => {
  
    return (
      <div className="card descriptionCard">
        <div>
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
        <p className="description">{newsData.description}</p>
    </div>
    );
  }

  
  
  
export default memo(DescriptionCard);
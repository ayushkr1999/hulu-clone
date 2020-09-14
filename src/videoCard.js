import React ,{forwardRef} from "react";
import  "./VideoCard.css";
import TextTruncate from 'react-text-truncate';

const base_url ="http://image.tmdb.org/t/p/original/";

const VideoCard=forwardRef(({movie},ref) => {
  return(
    <div ref={ref} className="VideoCard">
    <img
      src={`${base_url}${movie.backdrop_path || movie.poster_path}`}

     />
     <TextTruncate
      line={1}
      element="p"
      truncateText="..."
      text={movie.overview}
      />
     <h2>{movie.title || movie.original_name}</h2>
     <p>{movie.media_type && `${movie.media_type}`}</p>
     <p> {movie.vote_count}</p>
  </div>
);
});

export default VideoCard;

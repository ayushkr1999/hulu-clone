import React, {useState,useEffect} from "react";
import VideoCard from "./videoCard";
import axios from './axios';
import  "./Results.css";
import requests from "./requests";
import FlipMove from 'react-flip-move';

function Results({selectedOption}){
  const [movies, setMovies] =useState([]);

  useEffect(()=>{
    async function fetchData(){
      const request =await axios.get(selectedOption);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  },[selectedOption])
  return (
    <div className="Results">
      <FlipMove>
        {movies.map((movie)=>(
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
      </div>
  );
}

export default Results;

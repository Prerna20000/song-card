import React from "react";
import Rating from "./Rating";

function SongCard({ data }) {
  return (
    <div className="song-card">
      <img src={data.thumb} alt={data.title} className="st-thumb" />
      <div className="song-title">
      <p className="title">{data.title} by {data.artist}</p>
      </div>
      <Rating rating={data.rating}/> 
    </div>
  
  );
}

export default SongCard;
import React from 'react';
// import Header from './Header';
import './Nav.css';
import requests from './requests'

function Nav({setSelectedOption}) {
  return (
    <div className="Nav">

      <h2 onClick={()=> setSelectedOption(requests.fetchTrending)}>Treanding</h2>
      <h2 onClick={()=> setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
      <h2>Action</h2>
      <h2>Comedy</h2>
      <h2>Horror</h2>
      <h2>Romance</h2>
      <h2>Sci-fi</h2>
      <h2>Western</h2>
      <h2>Animation</h2>
      <h2>Movie</h2>
    </div>
  );
}

export default Nav;

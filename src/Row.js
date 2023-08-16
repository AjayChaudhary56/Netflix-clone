import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from './Axios'

const Row = ({title,fetchUrl,isLargeRow=false}) => {

const[movies,setMovies]=useState([])
const base_url= "https://image.tmdb.org/t/p/original/";

useEffect(()=>{
    

    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
fetchData()
},[fetchUrl])

  return (
    <div className='row'>
        <h2>{title} </h2>
        {movies && movies.map((movie) => (
                <img key={movie.id} src={`${base_url} ${isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt={movie?.name} />
            ))
        }
    </div>
  )
}

export default Row
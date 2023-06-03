import React, { useEffect, useState , isLargeRow } from 'react'
import axios from '../axios';
import './Style/Row.css'
const base_url = 'https://image.tmdb.org/t/p/original/'
function Row1({title,fetchUrl}) {
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
    async function fetchData(){
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  }fetchData()
    },[fetchUrl])

  return (
         
    
  
    <div className='row'>
        <h1 style = {{fontFamily:"Aharoni"}}>
            {title}
        </h1>
        <div className='row_posters'>
           {movies.map(movies =>{
            return (
             <img className = {`row_poster ${isLargeRow && "row_posterLarge"}`} src =  {`${base_url}${isLargeRow ?movies.poster_path:movies.backdrop_path }`}alt = {movies.name} key = {movies.id}/>
             )})}
        </div>
    </div>
  )
}

export default Row1;


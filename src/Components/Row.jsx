import React, { useEffect, useState  } from 'react'
import axios from '../axios';
// import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import './Style/Row.css';
const base_url = 'https://image.tmdb.org/t/p/original/'
function Row({title,fetchUrl}) {
    const [movie,setMovie] = useState([]);
    const [trailerUrl , setTrailerUrl] = useState(false);

    useEffect(()=>{
    async function fetchData(){
    const request = await axios.get(fetchUrl);
    setMovie(request.data.results);
    return request;
  }fetchData()
    },[fetchUrl])


    // const opts= {
    //   height :"390",
    //   width : "100%",
    //   playerVars : {
    //     autoplay:1,
    //   },
    // }
 const handleClick = (movie) =>{
   if(trailerUrl){
    setTrailerUrl("")
   }else{
     movieTrailer(movie?.name || "")
     .then((url)=>{
       const urlParams = new URLSearchParams(url).search
       urlParams.get('v')
     })
     .catch((error)=>console.log(error))
   }
 }
  return (
         
    
  
    <div className='row'>
        <h1 style = {{fontFamily:"Aharoni"}}>
            {title}
        </h1>
        <div className='row_posters'>
           {movie.map(movie =>{
            return (
             <img className = "row_poster" src = {`${base_url}${movie.poster_path}`} alt = {movie.name} key = {movie.id}
              onClick={()=>handleClick(movie)} 
              /> 
              
             )})}
         
        </div>
        {/* <YouTube 
       videoId = "qEVUtrk8_B4" opts = {opts}/> */}

    </div>


    

   
    // <div className='row'>
    //   <h2>{title}</h2>
    //   <div className='row_posters'>
        
    //     {movies && movies.map((movie)=>{
    //       return(
    //       <img
    //       onClick={()=>handleClick(movie)} 
    //       key={movie.id}
    //       className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
    //       src = {`${base_url}${isLargeRow ?movie.poster_path:movie.backdrop_path }`}
    //       alt = {movie.name}
    //       />
    //     )})}
    //   </div>
    // </div>
    
    // <YouTube 
    // videoId = "XtMThy8QKqU" opts = {opts}/>
  )
}

export default Row;



// <div className='row_posters'>
// {movies.map(movies =>{
//  return (
//   <img className = {`row_poster ${isLargeRow && "row_posterLarge"}`} src =  {`${base_url}${isLargeRow ?movies.poster_path:movies.backdrop_path }`}alt = {movies.name}/>
//   )})}
// </div>

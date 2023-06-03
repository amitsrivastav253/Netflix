import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../axios';
import requests from '../requests';
import './Style/Banner.css'
function Banner() {
    const [movie,setMovie] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
            return request;
        }
        fetchData()
    } , [])
    function truncate(str,n){
        return str?.length > n ? str.substr(0, n-1) + "...":str;
    }
    // console.log(movie)
  return (
    <>
    <header className='banner'
       style = {{
        backgroundSize:"cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
        )`,
        backgroundPosition:"center-center",
       
        
       }}   
    >
       
        {/* title */}
        <h2> {movie?.title || movie?.name || movie?.original_name} </h2> <br/>
         
        {/* 2 buttons */}
        <button className='banner_button' >Play</button>
       <button className='banner_button' >My List</button>
        {/* description */}
        <h3> {truncate(movie?.overview, 150)} </h3> <br/><br/>
        
        
    </header>
    <div className='banner--fadeBottom'></div>
    </>
  )
}

export default Banner;



// <div className='banner'
//     style={{backgroundSize:"cover",backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path
// }")`,
//       backgroundPosition:"center center"}}
//     >
        
//          <h1>{movie?.title || movie?.name || movie?.original_name}</h1> 
//       {/* 2 button */}
//        <div className='banner_buttons'>
//        <button className='banner_button' style = {{color:"white"}}>Play</button>
//      <button className='banner_button' style = {{color:"white"}}>My List</button>
//     </div>
//   {/* description */}
//     <h1 className='banner_description'>
//       {movie?.overview}
//      </h1>

     
 
       
//     </div>















































// import React, { useEffect, useState } from 'react';
// import './Style/Banner.css';
// import axios from 'axios';
// // import requests from '../request';
// const base_url = 'https://image.tmdb.org/t/p/original/'
// function Banner(fetchUrl) {
//     const [movies,setMovies] = useState([]);

//     useEffect(()=>{
//     async function fetchData(){
//     const request = await axios.get(fetchUrl);
//     setMovies(request.data.results);
//     return request;
//   }fetchData()
//     },[fetchUrl])
//   return (
//     <header className='banner'  style={{backgroundSize:"cover",
//         backgroundImage:`url{"${base_url}${movies.backdrop_path}"}`
//         ,backgroundPosition:"center-center"}}>
//         {/* header */}
        
//         <div className='banner_contents'>
//             <h1 className='banner_title'>
//                 {movies?.poster_path|| movies?.name || movies?.original_name}
//             </h1>
//        {/* banner contents */}
//         </div>
//         <div className='buttons'>
//             {/* 2 buttons */}
//             <button className='banner_buttons'>
//                 play
//             </button>
//             <button className='banner_buttons'>
//                 My list
//             </button>
//         </div>
//         <div className='banner_description'>
//             {/* banner description */}
//           <h1> {movies?.overview}</h1> 
//         </div>
//     </header>
//   )
// }

// export default Banner
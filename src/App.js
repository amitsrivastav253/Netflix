import React from 'react'
import Row from './Components/Row';
import Row1 from './Components/Row1';
import Banner from './Components/Banner';
import YouTube from 'react-youtube';
import './App.css';
import requests from './requests';
import Navbar from './Components/Navbar';
function App() {

  const opts= {
    height :"390",
    width : "100%",
    playerVars : {
      autoplay:1,
    },
  }
  return (
   <div className='app'>
    <Navbar/>
    <Banner/>
    <Row title = "Netflix originals" fetchUrl = {requests.fetchTrending}  />
    <YouTube 
       videoId = "qEVUtrk8_B4" opts = {opts}/>
    <Row1 title = "Top Rated" fetchUrl = {requests.fetchTopRated}  />
    <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
    <Row1 title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
    <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
   
   </div>
  )
} 

export default App
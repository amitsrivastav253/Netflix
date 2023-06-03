const Api_Key = "c45a857c193f6302f2b5061c3b85e743";
const requests = {
    fetchTrending : `https://api.themoviedb.org/3/trending/all/week?api_key=${Api_Key}&language=en-US`,
    fetchNetflixOriginals : `https://api.themoviedb.org/3/discover/tv?api_key=${Api_Key}&language=en-US`,
    fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_Key}&language=en-US`,
    fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&with_genres=28`,
    fetchComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&with_genres=35`,
    fetchHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&with_genres=27`,
    fetchRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&with_genres=10749`,
    fetchDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&with_genres=99`,
}


export default requests;


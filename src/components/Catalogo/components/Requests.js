const API_KEY = '6aa5d47739634219f9c4b18ba1383585';

const requests = {

    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=es-ES`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es-ES/`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,   
     
}

//https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=es-ES

export default requests;
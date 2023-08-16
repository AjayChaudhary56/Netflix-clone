const API_KEY="3ec6826185d7b8318709f6fa5c983a00";

const requests = {
        fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
        fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
        fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
        fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        fetchDocumentaries:` /discover/movie?api_key=${API_KEY}&with_genres=99`,
                           
      
      
}

export default requests;

  
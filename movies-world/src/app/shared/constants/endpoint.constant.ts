export const Endpoint = {
    trendingMovies: '/trending/movie/week',
    latestMovies: '/movie/now_playing',
    popularMovies: '/movie/popular',
    movieDetail: (id: string) => `/movie/${id}`,
    getOriginalImage: (hash: string) => `https://image.tmdb.org/t/p/original/${hash}`
}
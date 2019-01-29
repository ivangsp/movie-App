export const searchMovieByName = (movies, title) => {
    return movies.filter(movie => movie.name.toLowerCase().includes(title.toLowerCase()));
}
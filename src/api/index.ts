import axios from '@/api/axios'

const options = {
  headers: {
    Authorization: 'Bearer ' + process.env.TMDB_API_READ_ACCESS_TOKEN,
    accept: 'application/json',
  },
}

export const searchForMovieByName = async (movie: string) => {
  return axios
    .get(`/search/movie?query=${movie.toLowerCase()}`, options)
    .then(response => response)
    .catch(error => error)
}

export const searchForMovieById = async (movieId: string) => {
  return axios
    .get(`/movie/${movieId}`, options)
    .then(response => response)
    .catch(error => error)
}

export const getMovieAlternativesById = async (movieId: string) => {
  return axios
    .get(`/movie/${movieId}/alternative_titles`, options)
    .then(response => response)
    .catch(error => error)
}

export const getMovieRecommendationsById = async (movieId: string) => {
  return axios
    .get(`/movie/${movieId}/recommendations`, options)
    .then(response => response)
    .catch(error => error)
}

export const getMovieCreditsById = async (movieId: string) => {
  return axios
    .get(`/movie/${movieId}/credits`, options)
    .then(response => response)
    .catch(error => error)
}

export const getMovieDetailsById = async (movieId: string) => {
  return axios
    .get(`/movie/${movieId}/get-movie-details`, options)
    .then(response => response)
    .catch(error => error)
}

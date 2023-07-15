import axios from '@/api/axios'

export const searchForMovieByName = async (movie: string) => {
  const options = {
    headers: {
      Authorization: 'Bearer ' + process.env.TMDB_API_READ_ACCESS_TOKEN,
      accept: 'application/json',
    },
  }

  return axios
    .get(`/search/movie?query=${movie.toLowerCase()}`, options)
    .then(response => response)
    .catch(error => error)
}

export const searchForMovieById = async (movieId: string) => {
  const options = {
    headers: {
      Authorization: 'Bearer ' + process.env.TMDB_API_READ_ACCESS_TOKEN,
      accept: 'application/json',
    },
  }

  return axios
    .get(`/movie/${movieId}`, options)
    .then(response => response)
    .catch(error => error)
}

export const getMovieAlternativeById = async (movieId: string) => {
  const options = {
    headers: {
      Authorization: 'Bearer ' + process.env.TMDB_API_READ_ACCESS_TOKEN,
      accept: 'application/json',
    },
  }

  return axios
    .get(`/movie/${movieId}/alternative_titles`, options)
    .then(response => response)
    .catch(error => error)
}

export const getRecommendationsById = async (movieId: string) => {
  const options = {
    headers: {
      Authorization: 'Bearer ' + process.env.TMDB_API_READ_ACCESS_TOKEN,
      accept: 'application/json',
    },
  }

  return axios
    .get(`/movie/${movieId}/recommendations`, options)
    .then(response => response)
    .catch(error => error)
}

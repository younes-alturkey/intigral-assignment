import axios from 'axios'

const instance = axios.create({
  baseURL: `${process.env.TMDB_API_URL}`,
})

export default instance

import axios from 'axios'

const instance = axios.create({
  baseURL: `${process.env.API_URL}/api`,
})

export default instance

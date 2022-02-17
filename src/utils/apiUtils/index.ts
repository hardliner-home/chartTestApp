import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL
const headers = {}

const axiosClient = axios.create({
  baseURL,
  headers
})

export {
  baseURL,
  headers,
  axiosClient
}

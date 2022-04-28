import axios from "axios";

export const server = axios.create({
  baseURL: process.env.REACT_APP_URI,
  headers: {
    'authorization': `Bearer ${process.env.REACT_APP_SPOTIFY_KEY}`
  }
});
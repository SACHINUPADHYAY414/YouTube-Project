// import axios from 'axios';

// export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
// export const options = {
//   params: {
//     maxResults: 50,
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//     // 'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
//   },
// };

// export const axiosGetReq = async (url) => {
//   const res = await axios.get(`${BASE_URL}/${url}`, options);
//   return res.data;
// };
import axios from 'axios';

export const BASE_URL = 'https://youtube138.p.rapidapi.com';
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

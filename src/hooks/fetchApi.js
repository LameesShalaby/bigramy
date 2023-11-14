import axios from "axios";

export const fetchApi = axios.create({
     baseURL: process.env.REACT_APP_BASE_URL,
     headers: { 
        Authorization: process.env.REACT_APP_ACCESS_TOKEN,
      },

})
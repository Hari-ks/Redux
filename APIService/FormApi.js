import axios from "axios";

const baseUrl="http://localhost:3001"

const apiCall = axios.create({
    baseURL: baseUrl,
  })


  export default apiCall;
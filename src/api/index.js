import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://whispering-woodland-88721.herokuapp.com",
});

export default fetcher;


import axios from "axios";

const axiosInstance = axios.create({
  baseURL: " https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const serverInstance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

const cloudName = "dsmofsy4p";
const apiKey = "767382932218214";
const apiSecret = "tN2p6uleNqNJDoU64_8SE3O_CKE";
export const cloudinaryInstance = axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/${cloudName}/image`,
  headers: {
    "Content-Type": 'multipart/form-data',
  },
});

export default axiosInstance;

import axios from "axios";

export const token = process.env.REACT_APP_SEARCH_API_TOKEN

const instance = axios.create({
    baseURL: "https://suggestions.dadata.ru/",
})

instance.defaults.headers.common['Authorization'] = "Token " + token;


export const axiosInstance = instance

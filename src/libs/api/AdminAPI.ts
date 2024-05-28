import axios, {AxiosInstance} from "axios";

console.log(process.env.REACT_APP_API_URL)
export const AdminAPI:AxiosInstance = axios.create({
    baseURL  :process.env.REACT_APP_API_URL,
    withCredentials:true,
    headers:{"Content-Type":"application/json"}
})
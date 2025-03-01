import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Content-Type": "application/json",
    },
    wihtCredentials: false,
});

api.interceptors.request.use(
    async(config) => {
        console.log("Entrando al receptor");
        const token = await localStorage.getItem("token");
        if(token){
            config.headers.Autorization = `Bearer ${token}`;
        }console.debug("retornando receptor");
        return config;
    },
    (error) => {
        console.error("Error al receptor de configuracion", error);
        Promise.reject(error);
    }
);

export default api;
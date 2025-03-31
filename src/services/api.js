import axios from "axios";

const API_BASE_URL = "https://proyecto-web-backend-2ft0.onrender.com";

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
        }
        console.debug("retornando receptor");
        return config;
    },
    (error) => {
        console.error("Error al receptor de configuracion", error);
        Promise.reject(error);
    }
);

export default api;
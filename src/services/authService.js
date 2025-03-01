
import api from "./api";


//Api de login---
export const loginUser = async(username, password) => {
try {
    const response = await api.post("/login", {username, password});
    console.log(response.data);
    localStorage.setItem("token", response.data);
    return response.data;
} catch (error) {
    throw error.response.data.message;
}

};
//Api de Registro de usuario




//Api de Editar Usuario
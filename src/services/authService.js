import api from "./api";
//API de login
export const loginUser = async (email, password) => {
    try {
        const response = await api.post("/login", { email, password });
        console.log(response.data);
        const { userData } = response.data;

        // Verifica si la imagenBase64 tiene el prefijo adecuado
        let imageBase64 = userData.imageBase64;
        if (imageBase64 && !imageBase64.startsWith('data:image')) {
            imageBase64 = `data:image/png;base64,${imageBase64}`; // o usa el tipo correcto, como image/jpeg
        }
        localStorage.setItem("token", response.data);
        localStorage.setItem("uid", userData.uid);
        localStorage.setItem("username", userData.username);
        localStorage.setItem("role", userData.role);
        localStorage.setItem("email", email);
        localStorage.setItem("fullname", userData.fullname);
        localStorage.setItem("imageBase64", imageBase64); // Guarda la imagen correctamente formateada
        console.log("Datos del usuario:", userData.username, email, userData.fullname, userData.role);
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
};
//Api de Registro de usuario
export const RegisterUser = async (username, email, password, fullname) => {
    try {
        const response = await api.post("/registro", { username, email, password, fullname });
        console.log(response.data);
        localStorage.setItem("token", response.data);
        return response.data;
    } catch (error) {
        throw error.response.data.message;
    }
};
// API de Editar Usuario
export const updateUser = async (userData) => {
    const id = localStorage.getItem("uid") || "";
    try {
        const response = await api.post(`/actualizar-usuario/${id}`, userData);
        console.log("Datos nuevos:", response.data);
        if (response.data.imageBase64) {
          localStorage.setItem("imageBase64", `data:image/jpeg;base64,${response.data.imageBase64}`);
      }
      
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Error al actualizar el usuario";
    }
};
// API de Cambio de contraseña
export const ActualizarPassword = async (email, newPassword, codigo) => {
    try {
      const response = await api.post("/cambioPassword", { email, newPassword, codigo });
      if (response.status !== 200) {
        throw new Error(response.data.message || "Error al actualizar la contraseña");
      }
      return response;
    } catch (error) {
      throw error.response?.data?.message || "Error al actualizar el usuario";
    }
  };
  //API de envio de codigo para cambio de contraseña
  export const Verificacion = async (values) => {
    try {
      const response = await api.post("/codigo-verificacion", values);
      if (response.status !== 200) {
        throw new Error(response.data.message || "Error al actualizar la contraseña");
      }
      return response; // <- Retorna la respuesta
    } catch (error) {
      throw error.response?.data?.message || "Error al actualizar el usuario";
    }
  };
//API de envio de codigo de incio de sesion
  export const VerificacionInicioSesion = async (values) => {
    try {
      const response = await api.post("/codigo-inicio-sesion", values);
      if (response.status !== 200) {
        throw new Error(response.data.message || "Error en el codigo");
      }
      return response; // <- Retorna la respuesta
    } catch (error) {
      throw error.response?.data?.message || "Error al verificar el codigo";
    }
  };
  

//API envio de correo
 export const sendEmail = async (toEmail, subject, body) => {
    try {
      const response = await api.post("/send-email", {email: toEmail, subject: subject, body: body, });
      if (response.data.success) {
        console.log("Correo enviado con éxito");
      } else {
        console.error("Error al enviar correo");
      }
    } catch (error) {
      console.error("Error al enviar correo:", error);
    }
  };
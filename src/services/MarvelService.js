import api from "./api";

export const personajes = async () => {
    try {
        const response = await api.get("/obtener-personajes");
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Error al listar personajes";
    }
};

export const comics = async () => {
    try {
        const response = await api.get("/obtener-comics");
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Error al listar comics";
    }
};

export const peliculas = async () => {
    try {
        const response = await api.get("/obtener-peliculas"); 
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Error al listar peliculas";
    }
};

export const Agregarpeliculas = async (values) => {
    try {
        const response = await api.post("/agregar-peliculas", values);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Error al agregar peliculas";
    }
};
export const Editarpeliculas = async (values) => {
    try {
        const response = await api.post("/editar-pelicula", values);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Error al editar pelicula";
    }
};
export const Eliminarpeliculas = async (id) => {
    try {
        const response = await api.delete(`/eliminar-pelicula/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Error al eliminar pelicula";
    }
};

export const Agregarcomics = async (values) => {
    try {
        const response = await api.post("/agregar-comics", values);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Error al agregar comic";
    }
};
export const Editarcomics = async (values) => {
    try {
        const response = await api.post("/editar-comics", values);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Error al editar comic";
    }
};

export const Eliminarcomics = async (id) => {
    try {
        const response = await api.delete(`/eliminar-comics/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Error al eliminar comic";
    }
};

export const Agregarpersonajes = async (values) => {
    try {
        const response = await api.post("/agregar-personajes", values); // 🔹 Aquí está la corrección
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Error al agregar personaje";
    }
};
export const Editarpersonajes = async (values) => {
    try {
        const response = await api.post("/editar-personajes", values);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Error al editar personaje";
    }
};
export const Eliminarpersonajes = async (id) => {
    try {
        const response = await api.delete(`/eliminar-personajes/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Error al eliminar personaje";
    }
};

export const listenToUpdates = (callback) => {
    const eventSource = new EventSource('https://proyecto-web-backend-2ft0.onrender.com/events');
    
    eventSource.onopen = () => {
        console.log('Conexión SSE abierta');
    };
    
    eventSource.onmessage = (event) => {
        console.log('Evento recibido:', event.data);
        
        // Parsear event.data a un objeto JSON
        const parsedData = JSON.parse(event.data);
        
        // Llamar al callback con el mensaje de parsedData
        callback(parsedData.message);
    };
    
    eventSource.onerror = (error) => {
        console.error('Error en SSE:', error);
    };

    return eventSource; // Devuelves eventSource para poder cerrarlo luego en el useEffect
};





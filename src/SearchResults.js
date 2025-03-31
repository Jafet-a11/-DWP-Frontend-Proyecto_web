import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "antd";
import { comics } from "./services/MarvelService"; // Asegúrate de importar tu servicio de datos

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");
  
  const [filteredComics, setFilteredComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      const data = await comics(); // Llama a la API
      const results = data.filter(comic =>
        comic.Nombre.toLowerCase().includes(searchQuery.toLowerCase()) // Filtra los cómics
      );
      setFilteredComics(results);
    };

    fetchComics();
  }, [searchQuery]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Resultados de búsqueda para: "{searchQuery}"</h2>
      {filteredComics.length > 0 ? (
        filteredComics.map((comic) => (
          <Card key={comic.id} title={comic.Nombre} style={{ marginBottom: "20px" }}>
            <p><strong>Autor:</strong> {comic.Autor}</p>
            <p><strong>Historia:</strong> {comic.Historia}</p>
          </Card>
        ))
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
}

export default SearchResults;

import React, { useEffect, useState } from "react";
import { personajes } from "../../../services/MarvelService"; // Importa la API
import CharacterCard from "./CharacterCard"; // Importa el componente de tarjeta
import { Link } from 'react-router-dom'; 
const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await personajes(); // Llama a la API
        setCharacters(data); // Guarda los personajes en el estado
      } catch (error) {
        console.error("Error al obtener personajes:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {characters.map((character) => (
        <Link to={`/Personajes/InfoPersonajes/${character.id}`}>
        <CharacterCard key={character.id} character={character} />
        </Link>
      ))}
    </div>
  );
};

export default CharacterList;

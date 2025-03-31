// CharacterList.js
import React from "react";
import { Link } from "react-router-dom"; 
import CharacterCard from "./CharacterCard"; // Importa el componente de tarjeta

const CharacterList = ({ characters }) => {  // Recibe los personajes como prop
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {characters.map((character) => (
        <Link key={character.id} to={`/Personajes/InfoPersonajes/${character.id}`}>
          <CharacterCard character={character} />
        </Link>
      ))}
    </div>
  );
};

export default CharacterList;

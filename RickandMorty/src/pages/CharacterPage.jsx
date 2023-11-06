import React, { useState, useEffect } from "react";
import axios from "axios";
import CharCard from "../components/CharCard";

function CharacterPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        console.log(response);
        setCharacters(response.data.results); // assuming the API response has a .results property with the characters
      } catch {
        console.error("Error fetching characters:", error);
      }
    };
    getCharacters();
  }, []);

  return (
    <>
      <div className="m-12">
        <h1 className="text-blue-400 text-center w-3/4 m-auto font-black text-7xl">
          Character Page
        </h1>

        <ul className="char-list">
          {characters.map((character) => (
            <li key={character.id}>
              <CharCard
                name={character.name}
                status={character.status}
                species={character.species}
                image={character.image}
                gender={character.gender}
                type={character.type}
                location={character.location.name}
                origin={character.origin.name}
                episodes={character.episode}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CharacterPage;

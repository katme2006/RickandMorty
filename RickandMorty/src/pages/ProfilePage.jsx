import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import CharCard from "../components/CharCard";

function ProfilePage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(response.data);
      } catch (error) {
        console.error('Failed to fetch character', error);
      }
    };

    if (id) {
      getCharacter();
    }
  }, [id]); // Dependency array includes 'id'

  // Check if 'character' is not null before trying to access its properties
  return (
    <>
      {character ? (
        <>
          <h1>{character.name}</h1>
          <CharCard
            name={character.name}
            status={character.status}
            species={character.species}
            image={character.image}
            gender={character.gender}
            type={character.type}
            location={character.location && character.location.name} // Check if 'location' exists before trying to access 'name'
            origin={character.origin && character.origin.name} // Check if 'origin' exists before trying to access 'name'
            episodes={character.episode}
          />
        </>
      ) : (
        <p>Loading...</p> // Render loading state if 'character' is null
      )}
    </>
  );
}

export default ProfilePage;

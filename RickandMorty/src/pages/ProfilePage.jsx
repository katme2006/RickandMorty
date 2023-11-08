import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import CharCard from "../components/CharCard";
import { useOutletContext } from "react-router-dom";

function ProfilePage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const { setFavorites, favorites } = useOutletContext();

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(response.data);
      } catch (error) {
        console.error("Failed to fetch character", error);
      }
    };

    if (id) {
      getCharacter();
    }
  }, [id]);

  // Check if 'character' is found
  return (
    <>
      {character ? (
        <>
          <h1>{character.name}</h1>
          <div className="char-list">
            <CharCard
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              image={character.image}
              gender={character.gender}
              type={character.type}
              location={character.location && character.location.name} // Check if 'location' exists before trying to access 'name'
              origin={character.origin && character.origin.name} // Check if 'origin' exists before trying to access 'name'
              episodes={character.episode}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProfilePage;

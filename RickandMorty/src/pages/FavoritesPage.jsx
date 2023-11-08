import { useOutletContext } from "react-router-dom";
import CharCardSmall from "../components/CharCard";

function Favorites() {
  const { setFavorites, favorites } = useOutletContext();

  return (
    <>
      <h1>Favorites</h1>
      <div className="char-list">
        {favorites.map((char) => (
          <CharCardSmall
            key={char.id}
            id={char.id}
            name={char.name}
            image={char.image}
            setFavorites={setFavorites}
            favorites={favorites}
            location={char.location}
            origin={char.origin}
            species={char.species}
            status={char.status}
            gender={char.gender}
            type={char.type}
          />
        ))}
      </div>
    </>
  );
}

export default Favorites;

import { useOutletContext } from "react-router-dom";
import CharCard from "../components/CharCard";

function Favorites() {
    const { setFavorites, favorites } = useOutletContext(); // Fixed the spelling of 'setFavorites'

    return (
        <>
            <h1>Favorites</h1>
            {favorites.map((char) => ( // Added parentheses to wrap the arrow function's parameter
                <CharCard 
                    key={char.id} // Added a 'key' prop for list rendering
                    id={char.id} 
                    name={char.name} 
                    image={char.image} 
                    setFavorites={setFavorites} // Fixed the prop name 'setFavorites'
                    favorites={favorites} 
                />
            ))}
        </>
    );
}

export default Favorites;

import { useState, useEffect } from "react";
import axios from "axios";
import CharCard from "../components/CharCard";
import Pagination from "react-bootstrap/Pagination";
import { useOutletContext } from "react-router-dom";


function CharacterPage() {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { setFavorites,favorites } = useOutletContext();

  useEffect(() => {
    const getCharacters = async (page) => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${page}`
        );
        console.log(response);
        setCharacters(response.data.results); // assuming the API response has a .results property with the characters
      } catch {
        console.error("Error getting characters:", error);
      }
    };
    getCharacters(pageNumber);
  }, [pageNumber]);

  //Here we are rendering our React Pagination items
  //make arr
  const pageList = [];
  //loop number of pages - there are 42 total pages to do so we put that in the loop
  for (let i = 1; i <= 42; i++) {
    pageList.push(
      <Pagination.Item
        key={i}
        active={i === pageNumber}
        onClick={() => setPageNumber(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <div className="m-12">
      <div className="heading-div">
        <h1>Characters</h1>
      </div>

      <Pagination className="bg-secondary">
        <Pagination.First onClick={() => setPageNumber(1)} />
        <Pagination.Prev onClick={() => setPageNumber((page) => page - 1)} />
        {pageList}
        <Pagination.Next
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 42}
        />
        <Pagination.Last
          onClick={() => setPageNumber(42)}
          disabled={pageNumber === 42}
        />
      </Pagination>

      <ul className="char-list">
        {characters.map((character) => (
          <li key={character.id}>
            <CharCard
            id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              image={character.image}
              gender={character.gender}
              type={character.type}
              location={character.location.name}
              origin={character.origin.name}
              episodes={character.episode}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterPage;

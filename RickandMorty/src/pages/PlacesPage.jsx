import { useState, useEffect } from "react";
import axios from "axios";
import PlaceCard from "../components/PlaceCard";

function PlacesPage() {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
      async function fetchLocations() {
        let allLocations = [];


    //Loop 7 times for each page - Probably best practice
        for (let page = 1; page <= 7; page++) { 
          const response = await axios.get(`https://rickandmortyapi.com/api/location?page=${page}`);
          allLocations = allLocations.concat(response.data.results);
        }
    
        setLocations(allLocations);
      }
    
      fetchLocations();
    }, []);
    

  return (
    <>
      <h1>Rick and Morty Universe</h1>
      <div>
      <ul className="char-list">
          {locations.map((location) => (
            <li key={location.id}>
              <PlaceCard
                name={location.name}
                type={location.type}
                dimension={location.dimension}
                residents={location.residents}
                id={location.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PlacesPage;

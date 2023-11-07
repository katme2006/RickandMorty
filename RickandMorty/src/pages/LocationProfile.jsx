import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function LocationProfilePage() {
  const [location, setLocation] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchLocation = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/location/${id}`);
      setLocation(response.data);
    };

    fetchLocation();
  }, [id]);

  return (
    <>
      <h1>{location?.name}</h1>
      <h2>Type: {location?.type}</h2>
      <h2>Dimension: {location?.dimension}</h2>
      <h2>Residents:</h2>
      <ul>
        {location?.residents.map(residentUrl => (
          // need to add code to populate images of resident + names
          <li key={residentUrl}>{residentUrl}</li>
        ))}
      </ul>
    </>
  );
}

export default LocationProfilePage;

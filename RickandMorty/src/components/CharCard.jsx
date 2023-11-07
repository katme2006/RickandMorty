import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CharCard({
  id, // Add 'id' to the props
  name,
  status,
  species,
  gender,
  image,
  type,
  location,
  origin,
  episodes,
}) {
  const navigate = useNavigate(); // Get the navigate function

  // Function to handle click event
  const handleClick = () => {
    navigate(`/profile/${id}`); // Navigate to the profile page of the character
  };

  return (
    <div className="charCard" onClick={handleClick}> {/* Add the onClick event handler here */}
      <Card style={{ width: "18rem", backgroundColor: "black", color: "white" }}> {/* Corrected 'text' to 'color' */}
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Status: {status}</ListGroup.Item>
          <ListGroup.Item>Species: {species}</ListGroup.Item>
          {type && <ListGroup.Item>Type: {type}</ListGroup.Item>}
          <ListGroup.Item>Gender: {gender}</ListGroup.Item>
          <ListGroup.Item>Location: {location}</ListGroup.Item>
          <ListGroup.Item>Origin: {origin}</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default CharCard;

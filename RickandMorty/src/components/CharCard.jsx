import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

function CharCard({
  id, 
  name,
  status,
  species,
  gender,
  image,
  type,
  location,
  origin,
  episodes,
  favorites,
  setFavorites,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${id}`);
  };

  const isCharacterInFavorites = favorites.some((char) => char.id === id);

  const handleFavoriteClick = () => {
    if (isCharacterInFavorites) {
      const updatedFavorites = favorites.filter((char) => char.id !== id);
      setFavorites(updatedFavorites);
    } else {
      if (favorites.length < 4) {
        setFavorites([
          ...favorites,
          {
            id: id,
            name: name,
            image: image,
            origin: origin,
            location: location,
            status: status,
            species: species,
            gender: gender,
            type: type,
          },
        ]);
      } else {
        alert("You cannot have more than four favorites");
      }
    }
  };

  return (
    <div className="charCard">
      <Card
        style={{ width: "18rem", backgroundColor: "black", color: "white" }}
      >
        <Card.Img onClick={handleClick} variant="top" src={image} />
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
          {isCharacterInFavorites ? (
            <Button
              variant="danger"
              onClick={handleFavoriteClick}
              style={{
                width: "75%",
                margin: "5% auto",
                backgroundColor: "#2fd629",
                color: "black",
                borderColor: "#2fd629",
              }}
            >
              Remove from Favorites
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={handleFavoriteClick}
              style={{ width: "75%", margin: "5% auto" }}
            >
              Add to Favorites
            </Button>
          )}
        </ListGroup>
      </Card>
    </div>
  );
}

export default CharCard;

import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

function CharCardSmall({
  id, // Add 'id' to the props
  name,
  image,
  favorites,
  setFavorites,
  origin,
  location,
  gender,
  species,
  status,
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
            gender: gender,
            location: location,
            species: species,
            status: status,
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

export default CharCardSmall;

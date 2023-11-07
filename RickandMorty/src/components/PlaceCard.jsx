import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function PlaceCard({ id, name, type, dimension}) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/location/${id}`);
  };

  return (
    <Card style={{ width: "18rem" }} onClick={handleClick}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{type}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PlaceCard;

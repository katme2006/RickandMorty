import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function CharCard({
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
  return (

    <div className="charCard">
    <Card  style={{ width: "18rem", backgroundColor: "black", text:"white",}}>
      <Card.Img variant="top" src={image} />
      <Card.Body >
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Status: {status}</ListGroup.Item>
        <ListGroup.Item>Species: {species}</ListGroup.Item>
        {type && <ListGroup.Item>Type: {type}</ListGroup.Item>}
        <ListGroup.Item>Gender: {gender} </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          Location: <Card.Link href="#">{location}</Card.Link>
        </ListGroup.Item>
        <ListGroup.Item>
          {" "}
          Origin: <Card.Link href="#">{origin}</Card.Link>
        </ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  );
}

export default CharCard;

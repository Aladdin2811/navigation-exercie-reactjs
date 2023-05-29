import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardItem = (props) => {
  return (
    <Card style={{ width: "18rem" }} >
      <Card.Img variant="top" src={props.thumbnail} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}

          <div>Brand Name: {props.brand}</div>
          <div>Category: {props.category}</div>
          <div>Price: {props.price}</div>

          </Card.Text>
        {/* <div>
          
        </div> */}
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardItem;

import React from "react";
import mini from './images/mini1.jpg'
import { Card, Button } from "react-bootstrap";

export default function CardComp(props) {
  // console.log(props);
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={mini} />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
  );
}

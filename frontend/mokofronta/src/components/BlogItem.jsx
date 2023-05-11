import { Card, Button } from "react-bootstrap";
import React from "react";

export const BlogItem = () => {
  const handleOnClick = () => alert("you clicked!");

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some quick example... bla bla bla</Card.Text>
        <Button onClick={handleOnClick} variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

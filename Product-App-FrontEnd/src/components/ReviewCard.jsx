import React from "react";
import { Card } from "react-bootstrap";

const ReviewCard = ({ review }) => {
  return (
    <>
      <Card className="shadow-lg m-1 p-2 rounded" style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Rating: {review.rating}</Card.Title>
          <Card.Text>Description: {review.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ReviewCard;

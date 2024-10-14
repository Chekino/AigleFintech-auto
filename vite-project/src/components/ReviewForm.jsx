// src/components/ReviewForm.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ReviewForm = ({ partId, onSubmitReview }) => {
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim() !== "") {
      // Appeler la fonction parent pour soumettre l'avis
      onSubmitReview(partId, review);
      setReview(""); // Réinitialiser le champ après soumission
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formReview">
        <Form.Label>Votre avis</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Écrivez votre avis ici..."
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Soumettre l'avis
      </Button>
    </Form>
  );
};

export default ReviewForm;

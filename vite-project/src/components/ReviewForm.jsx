// src/components/ReviewForm.js
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ReviewForm = ({ partId, onSubmitReview }) => {
  const [review, setReview] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim().length < 10) {
      setError("L'avis doit contenir au moins 10 caractères.");
    } else {
      onSubmitReview(partId, review);
      setReview("");
      setError("");
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
      {error && <p className="text-danger">{error}</p>}
      <Button variant="primary" type="submit">
        Soumettre l'avis
      </Button>
    </Form>
  );
};

export default ReviewForm;

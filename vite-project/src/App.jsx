import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ReviewForm from "./components/ReviewForm";
import AutoPiece from "./components/AutoPiece";
import { useState } from "react";
import ReviewList from "./components/ReviewList";
import NavBar from "./components/Navbar";
import autoPiecesData from "./components/AutoPieceData";

function App() {
  const [autoPieces, setAutoPieces] = useState(autoPiecesData); // Utiliser les données importées

  // Fonction pour gérer la soumission des avis
  const handleReviewSubmit = (partId, reviewData) => {
    const updatedParts = autoPieces.map((part) => {
      if (part.id === partId) {
        return { ...part, reviews: [...part.reviews, reviewData] };
      }
      return part;
    });
    setAutoPieces(updatedParts);
  };

  return (
    <div className="container">
      <NavBar />
      <div className="text-center">
        <h1 className="m-2">AIGLE FINTECH AUTO </h1>
        <p className="">N1 dans la vente de pièces automobile en ligne</p>
      </div>

      <div className="parts-list">
        {autoPieces.map((part) => (
          <div key={part.id}>
            <AutoPiece part={part} />
            {/* Formulaire d'avis associé à la pièce */}
            <ReviewForm partId={part.id} onSubmitReview={handleReviewSubmit} />

            <ReviewList reviews={part.reviews} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

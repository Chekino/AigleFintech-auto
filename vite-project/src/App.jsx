import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ReviewForm from "./components/ReviewForm";
import AutoPiece from "./components/AutoPiece";
import { useState } from "react";

function App() {
  const [autoParts, setAutoParts] = useState([
    {
      id: 1,
      name: "Moteur",
      quantity: 10,
      description: "Moteur Toyota205/55 R16",
      imageUrl:
        "https://imgs.search.brave.com/AoCiD7_Ras1_YCEyvwbuElkiKuM6QgBpPLReRC2qwSw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYS12/b2l0dXJlLmZyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzAz/L21vdGV1ci5qcGc",
      reviews: [],
    },
    {
      id: 2,
      name: "Batterie",
      quantity: 5,
      description: "Batterie Varta 12V 70Ah",
      imageUrl:
        "https://imgs.search.brave.com/1MW8A9AkqkBNBFzaNLFGX0rmg1ZF1QM5_r1ypZmRsiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mdnN0/b3JhZ2Vwcm9kLmJs/b2IuY29yZS53aW5k/b3dzLm5ldC9pbWcv/NzEzOTI5L3NhbnMx/X25kLmpwZw",
      reviews: [],
    },
    {
      id: 3,
      name: "Volant",
      quantity: 8,
      description: "Volant Renault Clio",
      imageUrl:
        "https://imgs.search.brave.com/UusOvHJILeOJmKeMaMti-CZITbyFSdGvCjfbWGsK6W4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFhdTlhZzZEVUwu/anBn",
      reviews: [],
    },
  ]);

  // Fonction pour gérer la soumission des avis
  const handleReviewSubmit = (partId, review) => {
    const updatedParts = autoParts.map((part) => {
      if (part.id === partId) {
        return { ...part, reviews: [...part.reviews, review] };
      }
      return part;
    });
    setAutoParts(updatedParts);
  };

  return (
    <div className="container">
      <h1>Pièces Auto en Vente</h1>

      <div className="parts-list">
        {autoParts.map((part) => (
          <div key={part.id}>
            <AutoPiece part={part} />
            {/* Formulaire d'avis associé à la pièce */}
            <ReviewForm partId={part.id} onSubmitReview={handleReviewSubmit} />

            {/* Liste des avis */}
            <div className="reviews">
              <h3>Avis :</h3>
              {part.reviews.length > 0 ? (
                part.reviews.map((review, index) => (
                  <div key={index} className="review">
                    <p>{review}</p>
                  </div>
                ))
              ) : (
                <p>Aucun avis pour cette pièce.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

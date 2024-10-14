const ReviewList = ({ reviews }) => {
  return (
    <div className="reviews">
      <h3>Avis clients :</h3>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review}</p>
          </div>
        ))
      ) : (
        <p>Aucun avis pour cette pièce.</p>
      )}
    </div>
  );
};

export default ReviewList;

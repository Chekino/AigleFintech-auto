const AutoPiece = ({ part }) => {
  return (
    <div className="auto-part">
      <div className="text-center">
        <img src={part.imageUrl} alt={part.name} />
        <h2>{part.name}</h2>
        <p>Quantité: {part.quantity}</p>
        <p>Description: {part.description}</p>
      </div>
    </div>
  );
};

export default AutoPiece;

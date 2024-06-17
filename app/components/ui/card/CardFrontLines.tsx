
export default function CardFrontLines() {
  return (
    <div className="card__front-lines">
      {Array(4)
        .fill(1)
        .map((el) => (
          <div className="card__front-line"></div>
        ))}
    </div>
  );
}

export default function CardBackDrop() {
  return (
    <div className="card__backdrop">
      {Array(10)
        .fill(1)
        .map((el) => (
          <div className="card__backdrop-ray"></div>
        ))}

    </div>
  );
}

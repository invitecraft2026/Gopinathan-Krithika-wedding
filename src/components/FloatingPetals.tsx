const FloatingPetals = () => {
  const petals = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: 12 + Math.random() * 10,
    duration: 7 + Math.random() * 8,
    delay: Math.random() * 10,
    symbol: i % 3 === 0 ? "✿" : i % 3 === 1 ? "❀" : "✾",
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute text-primary/20 animate-petal-fall"
          style={{
            left: p.left,
            fontSize: p.size,
            ["--fall-duration" as string]: `${p.duration}s`,
            ["--fall-delay" as string]: `${p.delay}s`,
          }}
        >
          {p.symbol}
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;

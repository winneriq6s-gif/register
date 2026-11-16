export default function Calendar() {
  const days = Array.from({ length: 14 }, (_, i) => i + 1);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8 }}>
      {days.map((d) => (
        <button key={d} style={{ padding: 12 }}>{d}</button>
      ))}
    </div>
  );
}

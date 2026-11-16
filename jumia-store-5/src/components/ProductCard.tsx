export default function ProductCard({ name, price }: { name: string; price: number }) {
  return (
    <div style={{ border: "1px solid #334155", padding: 12, borderRadius: 8 }}>
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button>Add to cart</button>
    </div>
  );
}

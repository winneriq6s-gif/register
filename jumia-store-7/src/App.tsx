import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function App() {
  return (
    <div className="container">
      <h1>Jumia Store 7</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        {products.map((p) => (
          <ProductCard key={p.id} name={p.name} price={p.price} />
        ))}
      </div>
    </div>
  );
}

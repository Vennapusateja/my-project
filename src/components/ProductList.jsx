import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 200,
    description: "Easy care indoor plant.",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 350,
    description: "Air purifying plant for home.",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 450,
    description: "Beautiful flowering indoor plant.",
  },
];

export default function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Plant Shop - Products</h2>

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p>
            <b>Price:</b> ₹{p.price}
          </p>

          <button onClick={() => handleAddToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

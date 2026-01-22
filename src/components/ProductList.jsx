import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantCategories = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 350,
        thumbnail:
          "https://images.unsplash.com/photo-1598887142481-69a47f8801b4",
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 450,
        thumbnail:
          "https://images.unsplash.com/photo-1615485737651-580ddfc7ecdd",
      },
    ],
  },
  {
    category: "Indoor Plants",
    plants: [
      {
        id: 3,
        name: "Aloe Vera",
        price: 200,
        thumbnail:
          "https://images.unsplash.com/photo-1598880940804-8c4d1a8b56b2",
      },
      {
        id: 4,
        name: "Money Plant",
        price: 250,
        thumbnail:
          "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
      },
    ],
  },
  {
    category: "Succulents",
    plants: [
      {
        id: 5,
        name: "Jade Plant",
        price: 300,
        thumbnail:
          "https://images.unsplash.com/photo-1615485737651-580ddfc7ecdd",
      },
      {
        id: 6,
        name: "Cactus",
        price: 280,
        thumbnail:
          "https://images.unsplash.com/photo-1519331379826-f10be5486c6d",
      },
    ],
  },
];

export default function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list-container" style={{ padding: "20px" }}>
      <h2>Our Plants</h2>

      {plantCategories.map((group) => (
        <div key={group.category} style={{ marginBottom: "25px" }}>
          <h3>{group.category}</h3>

          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            {group.plants.map((plant) => (
              <div
                key={plant.id}
                className="product-card"
                style={{
                  width: "200px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "10px",
                }}
              >
                <img
                  src={plant.thumbnail}
                  alt={plant.name}
                  style={{ width: "100%", height: "140px", objectFit: "cover" }}
                />
                <h4>{plant.name}</h4>
                <p>₹{plant.price}</p>

                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(plant)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

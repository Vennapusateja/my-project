import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <>
      {!showProductList ? (
        <div className="landing">
          <div className="overlay">
            <h1>Welcome to Paradise Nursery</h1>
            <p>Bring nature into your home</p>
            <button
              className="get-started"
              onClick={() => setShowProductList(true)}
            >
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </>
  );
}

export default App;

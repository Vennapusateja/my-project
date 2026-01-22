import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    const newQty = item.quantity - 1;

    if (newQty <= 0) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: newQty }));
    }
  };

  return (
    <div className="cart-container" style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart-msg">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item"
              style={{
                border: "1px solid #ccc",
                marginBottom: "10px",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-price">Price: ₹{item.price}</p>
              <p className="cart-item-quantity">Quantity: {item.quantity}</p>

              <button
                className="decrement-btn"
                onClick={() => handleDecrease(item)}
              >
                -
              </button>

              <button
                className="increment-btn"
                onClick={() => handleIncrease(item)}
              >
                +
              </button>

              <button
                className="remove-btn"
                style={{ marginLeft: "10px" }}
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </div>
          ))}

          <h3 className="total-amount">Total Amount: ₹{totalAmount}</h3>
        </>
      )}
    </div>
  );
}

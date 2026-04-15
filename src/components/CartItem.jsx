import { useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../redux/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between border p-2">
        <img src={item.thumbnail} className="h-30 w-30 object-cover" />
      <h2>{item.title}</h2>
      <div className="justify-center">
        <button onClick={() => dispatch(decreaseQty(item.id))} className="border p-1">-</button>
        {item.quantity}
        <button onClick={() => dispatch(increaseQty(item.id))} className="border p-1">+</button>
      </div>

      <button onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>
    </div>
  );
}
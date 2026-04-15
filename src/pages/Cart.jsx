import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function Cart() {
  const items = useSelector(state => state.cart.items);
  

  return (
    <div className="p-4 bg-green-400">
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
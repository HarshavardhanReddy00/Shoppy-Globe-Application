import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setSearch } from "../redux/searchSlice";

export default function Header() {
  const dispatch = useDispatch();

  const items = useSelector(state => state.cart.items);

  const totalCount = items.reduce((total, item) => total + item.quantity, 0);
  

  return (
    <div className="flex justify-between p-4 shadow bg-sky-400">
      <h1 className="font-bold text-xl">ShoppyGlobe</h1>

      <input
        className="border px-2 py-1"
        placeholder="Search products..."
        onChange={(e) => dispatch(setSearch(e.target.value))}/>

        <div className="space-x-4">
        <Link to="/" className="hover:bg-yellow-400">Home</Link>
        <Link to="/cart" className="hover:bg-yellow-400">🛒 Cart
          {totalCount > 0 && (
            <span className="ml-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {totalCount}
            </span>
          )}</Link>
        <Link to="/checkout" className="hover:bg-yellow-400">Checkout</Link>
      </div>
      
    </div>
  );
}
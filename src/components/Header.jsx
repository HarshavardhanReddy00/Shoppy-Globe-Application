import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setSearch } from "../redux/searchSlice";

export default function Header() {
  const dispatch = useDispatch();

  const items = useSelector(state => state.cart.items);
  

  return (
    <div className="flex justify-between p-4 shadow bg-sky-400">
      <h1 className="font-bold text-xl">ShoppyGlobe</h1>

      <input
        className="border px-2 py-1"
        placeholder="Search products..."
        onChange={(e) => dispatch(setSearch(e.target.value))}/>
      
    </div>
  );
}
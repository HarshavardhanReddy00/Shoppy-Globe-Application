import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

    const handleAdd = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border p-4 rounded shadow bg-amber-400 hover:scale-110 ">
      <img src={product.thumbnail} className="h-32 w-full object-cover" />
      <h2>{product.title}</h2>
      <p>₹{product.price}</p>

      <Link to={`/product/${product.id}`} className="text-blue-500">View</Link>

      <button
        onClick={handleAdd}
        className="bg-red-400 text-white px-2 py-1 ml-2"
      >
        Add to Cart
      </button>
    </div>
  );
}
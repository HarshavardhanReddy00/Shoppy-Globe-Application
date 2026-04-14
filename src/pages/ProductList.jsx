import useFetchProducts from "../hooks/useFetchProducts";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

export default function ProductList() {
  const { products, error } = useFetchProducts();
  const search = useSelector(state => state.search);//subscribing to the action

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (error) return <h1>{error}</h1>;

  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-pink-400">
      {filtered.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
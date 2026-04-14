import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct)
      .catch(() => console.log("Error"));
  }, [id]);

  if (!product) return <h1>Loading...</h1>;

  return (
    <div className="p-4 flex gap-4 bg-purple-500">
      <img src={product.thumbnail} className="w-60" />
      <div>
        <h1 className="text-xl">{product.title}</h1>
        <p>{product.description}</p>
        <p>₹{product.price}</p>
      </div>
    </div>
  );
}
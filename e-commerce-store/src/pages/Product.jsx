// src/pages/Product.jsx
import react from "react";
import { useLocation, useParams } from "react-router-dom";
import products from "../data/products";
import ProductDetail from "../components/ProductDetail";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

export default function Product() {
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();

  // Prefer location.state.product, fallback to find by id
  const product =
    (location.state && location.state.product) ||
    products.find((p) => p.id === params.id);

  if (!product) {
    return <div className="p-8">Product not found</div>;
  }

  function handleAdd() {
    dispatch(addItem({ id: product.id, title: product.title, price: product.price, image: product.image }));
  }

  return (
    <div className="p-6">
      {/* keep ProductDetail component usage */}
      <ProductDetail product={product} onAdd={() => handleAdd()} />
      
    </div>
  );
}

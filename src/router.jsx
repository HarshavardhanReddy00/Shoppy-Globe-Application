import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App";

// Lazy imports
const ProductList = lazy(() => import("./pages/ProductList"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Wrapper for Suspense
const withSuspense = (Component) => (
  <Suspense fallback={<h1 className="text-center mt-10">Loading...</h1>}>
    <Component />
  </Suspense>
);

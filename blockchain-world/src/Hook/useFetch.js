import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  if (url[-1] === "=") return 0;
  return products;
};

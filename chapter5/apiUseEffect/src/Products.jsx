import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
    };
    getData();
  }, []);

  return (
    <section>
      <h1>Product Details</h1>
      <img src={product.image} alt="" />
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </section>
  );
};

export default Products;

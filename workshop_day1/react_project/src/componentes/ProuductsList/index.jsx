import React, { useContext, useEffect, useState } from "react";
import ProductWrapper from "../ProductWrapper";
import ThemeContext from "../../contexts/ThemeContext";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";


const ProductsList = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["PRODUCTS"],
    queryFn: async () => {
      const response = await axiosInstance.get("/products");
      return response.data;
    },
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axiosInstance.patch("/products/1", {
  //       price: 15,
  //     });
  //   };
  //   fetchData();
  // },[])

  return (
    <div>
      <div className="d-flex gap-2">
        <h1>Products</h1>
        
      </div>
      {isLoading && (
              <div className="d-flex justify-content-center mt-5 align-items-center">
                <FaSpinner animation="border" />
              </div>
            )}
            {error ? (
              <p className="text-danger">{error.message}</p>
            ) : (
        <div>
          <div className=" products-contianer">
            {products?.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                isCartItem={false}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;

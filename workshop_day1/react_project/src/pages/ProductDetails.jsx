import React from "react";
import { Navigate, useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../componentes/ProductCard";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["PRODUCT", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/products/${id}`);
      return response.data;
    },
    retry: false,
  });

  if (error) return <Navigate to="/not-found" replace />;

  return data && <ProductCard product={data} />;
};

export default ProductDetails;

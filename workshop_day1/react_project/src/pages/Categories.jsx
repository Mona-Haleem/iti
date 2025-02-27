import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaSpinner } from "react-icons/fa";
import axiosInstance, { serverInstance } from "../utils/axiosInstance";
import CategoryCard from "../componentes/CategoryCard";
import { Typography } from "@mui/material";

const Categories = () => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await serverInstance.get("/categories");
      return response.data;
    },
  });

  return (
  <div className="w-full">
      
      <Typography variant="h3" sx={{mb:3}}>Categories</Typography>  
     
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
            {categories?.map((cat) => (<CategoryCard key={cat.id} cat={cat}/>))}
          </div>
        </div>
      )}
    </div>);
};

export default Categories;

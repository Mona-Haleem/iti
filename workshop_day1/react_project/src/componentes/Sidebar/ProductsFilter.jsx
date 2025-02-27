import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaSpinner } from "react-icons/fa";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import  { serverInstance } from "../../utils/axiosInstance";
import { setCategory } from "../../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductsFilter = () => {
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

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const {category} = useSelector((state) => state.products)
  
  const handelFilter = (cat)=>{
    dispatch(setCategory(cat))
    navigate(`/products/${encodeURIComponent(cat)}`)
  }
  return (
  <aside>    
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
            {categories?.map((cat) => (
                <Card key={cat.name} sx={{ position: 'relative', borderRadius: 2 ,maxWidth:"80%",backgroundColor:cat.name == category ? "#ccc !important":''}}>
                <CardActionArea onClick={()=>handelFilter(cat.name)}>
                  <CardContent>
                    <Typography variant="h5" component="div" sx={{textAlign:"center"}}>
                      {cat.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>
        </div>
      )}
    </aside>);
};

export default ProductsFilter;

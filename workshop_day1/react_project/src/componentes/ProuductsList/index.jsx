import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";
import ProductCard from "../ProductCard";
import { FaSpinner } from "react-icons/fa";
import { useLocation, useSearchParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setCategory } from "../../redux/slices/productSlice";


const ProductsList = ({horizentalScroll}) => {
  const dispatch = useDispatch();
  const {products,error,loading,category} = useSelector((state)=>state.products)
  const {pathname} = useLocation();
  useEffect(() => {
    console.log(pathname)
    if(pathname == '/products'){
      dispatch(setCategory(''))
      dispatch(fetchProducts(''));
    }else
    dispatch(fetchProducts(category));
  }, [dispatch,pathname]);

  return (
    <div style={{padding:"20px",flex:1}}>
      {loading && (
              <div className="d-flex justify-content-center mt-5 align-items-center">
                <FaSpinner animation="border" />
              </div>
            )}
            {error ? (
              <p className="text-danger">{error.message}</p>
            ) : (
        <div>
          <div className={`products-contianer ${horizentalScroll? 'scrollHContainer':''}`}>
            {products?.length > 0 ?
              products.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                isCartItem={false}
              />
            )):
            <Typography variant="h4" sx={{width:"500px"}}>No Products available now</Typography>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;

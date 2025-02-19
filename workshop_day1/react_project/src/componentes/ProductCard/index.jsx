import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, removeAllFromCart } from "../../redux/slices/cartSlice";
import { addToFavorite, removeFromFavorite } from "../../redux/slices/favProductSlice";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { Box, Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const ProductCard = ({ product, isCartItem = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favProduct = useSelector((state) => state.favProduct.products);
  let isFav = favProduct.some((prd) => prd.id == product.id);
  console.log(isFav)
  const handleAddToCart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const handleRemoveFromCart = (event,all=false) => {
    event.stopPropagation();
    event.preventDefault();
    if(all)
      dispatch(removeAllFromCart(product));
    else
      dispatch(removeFromCart(product));
  };

  const handelAddtoFavourite = (event) =>{
    console.log('adding')
    event.stopPropagation();
    event.preventDefault();
    dispatch(addToFavorite(product));
  }

  const handleRemoveFromFavourite = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(removeFromFavorite(product));
  };

  return (
    <Link to={`/products/${product.id}`}>
      <Card>
        <CardMedia 
           image={product.image} 
           alt={product.name} 
           className="card-img" 
           component="img"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{height:"70px" ,overflow:"hidden"}}>
        {product.name || product.title}
        </Typography>
        <Typography component="p" sx={{ color: 'text.secondary' }}>
          Price: {product.price}
        </Typography>

          <p className="card-text"></p>
          {isCartItem && 
          <div className="my-3 mx-auto">
            <p className="card-text"> Quantity</p>
            <ButtonGroup size="sm" className="my-2 w-full ">
              <Button variant="contained" onClick={handleAddToCart}>+</Button>
              <Button disabled ><p className="w-50">{product.quantity}</p></Button>
              <Button variant="contained" onClick={handleRemoveFromCart}>-</Button>
            </ButtonGroup>
          </div>
          }
          <CardActions className="flex justify-between">
            {isCartItem ? (
              <Button variant="contained"  onClick={(e) =>handleRemoveFromCart(e,true)}>
                Remove from Cart
              </Button>
            ) : (
              <Button variant="contained" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            )}
            <FaStar color={isFav ? "gold" :"gray"} size={24} onClick={isFav ? handleRemoveFromFavourite:handelAddtoFavourite}/>
          </CardActions>

          </CardContent>
        </Card>
      </Link>
  );
};

export default ProductCard;

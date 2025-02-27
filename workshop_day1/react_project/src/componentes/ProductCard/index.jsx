import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, removeAllFromCart } from "../../redux/slices/cartSlice";
import { addToFavorite, removeFromFavorite } from "../../redux/slices/favProductSlice";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const ProductCard = ({ product, isCartItem = false, isDetailItem = false }) => {
  const dispatch = useDispatch();

  const favProduct = useSelector((state) => state.favProduct.products);
  let isFav = favProduct.some((prd) => prd.id === product.id);

  const handleAddToCart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (event, all = false) => {
    event.stopPropagation();
    event.preventDefault();
    if (all) dispatch(removeAllFromCart(product));
    else dispatch(removeFromCart(product));
  };

  const handelAddtoFavourite = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(addToFavorite(product));
  };

  const handleRemoveFromFavourite = (event) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(removeFromFavorite(product));
  };

  const detailItemStyle = {
    container: {
      display: "flex",
      width:"100%",
      justifyContent: "space-between",
      position: "relative",
      paddingBottom:"50px"
    },

    cardContent: {
      flexGrow: 1, 
      padding: "16px",
      overflow: "hidden",
    },
    actions: {
      position:"absolute",
      bottom:"20px",
      right:0,
      width:"50%",
      justifyContent:"center" ,
      gap:"50px"
    },
  };

  return (
    <Link to={`/products/${product.id}`}>
      <Card sx={isDetailItem?detailItemStyle.container:{ minWidth: "285px",  }}>
        <CardMedia
          image={product.image}
          alt={product.name}
          className={isDetailItem ?'detail-img':"card-img"}
          component="img"
        />
        <CardContent sx={detailItemStyle.cardContent}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ height: "70px", overflow: "hidden" }}
          >
            { product.title}
          </Typography>
          <Typography component="p" sx={{ color: "text.secondary" }}>
            Price: {product.price}
          </Typography>
          {isDetailItem && <Typography variant="body1" sx={{marginY:"20px"}}>{product.description}</Typography>}
          {isCartItem && (
            <div className="my-3 mx-auto">
              <p className="card-text">Quantity</p>
              <ButtonGroup size="sm" className="my-2 w-full ">
                <Button variant="contained" onClick={handleAddToCart}>
                  +
                </Button>
                <Button disabled>
                  <p className="w-50">{product.quantity}</p>
                </Button>
                <Button variant="contained" onClick={handleRemoveFromCart}>
                  -
                </Button>
              </ButtonGroup>
            </div>
          )}
        </CardContent>

        <CardActions sx={isDetailItem ? detailItemStyle.actions:{}} className="flex justify-between">
          {isCartItem ? (
            <Button variant="contained" onClick={(e) => handleRemoveFromCart(e, true)}>
              Remove from Cart
            </Button>
          ) : (
            <Button variant="contained" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
          <FaStar
            color={isFav ? "gold" : "gray"}
            size={24}
            onClick={isFav ? handleRemoveFromFavourite : handelAddtoFavourite}
          />
        </CardActions>
      </Card>
    </Link>
  );
};

export default ProductCard;

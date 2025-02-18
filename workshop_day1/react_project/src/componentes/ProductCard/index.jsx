import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, removeAllFromCart } from "../../redux/slices/cartSlice";
import { ButtonGroup, Button } from "react-bootstrap";
import { addToFavorite, removeFromFavorite } from "../../redux/slices/favProductSlice";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";

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
      <div className="card mb-4" style={{ maxWidth: "18rem" }}>
        <img src={product.image} alt={product.name} className="card-img-top object-fit-cover border border-bottom" style={{height:"250px"}} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: {product.price}</p>
          {isCartItem && 
          <div className="my-3">
            <p className="card-text"> Quantity</p>
            <ButtonGroup size="sm" className="w-100 ">
              <Button onClick={handleAddToCart}>+</Button>
              <p className="btn w-50">{product.quantity}</p>
              <Button  onClick={handleRemoveFromCart}>-</Button>
            </ButtonGroup>
          </div>
          }
          <div className="d-flex justify-content-between">
            {isCartItem ? (
              <button className="btn btn-primary" onClick={(e) =>handleRemoveFromCart(e,true)}>
                Remove from Cart
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
            )}
            <FaStar color={isFav ? "gold" :"gray"} size={24} onClick={isFav ? handleRemoveFromFavourite:handelAddtoFavourite}/>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

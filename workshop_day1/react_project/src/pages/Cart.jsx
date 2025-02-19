import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../componentes/ProductCard";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart)
  return (
    <>
      {cart.products.length == 0 ? (
        <p className="text-danger"> No product in cart</p>
      ) : (
        <div className=" products-contianer">
          {cart.products?.map((product) => (
            <ProductCard product={product} key={product.id} isCartItem={true} />
          ))}
        </div>
      )}
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell>Total price</TableCell>
            <TableCell>Total count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{cart.totalPrice.toFixed(2)}</TableCell>
            <TableCell>{cart.totalQuantity}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Cart;

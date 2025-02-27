import { Badge } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function IconWithBadge({ children, icon }) {
  const items = useSelector((state) =>
    icon == "cart" ? state.cart.products : state.favProduct.products
  );

  return (
    <>
      <Badge badgeContent={items.length} color="warning">
        {children}
      </Badge>
    </>
  );
}

export default IconWithBadge;

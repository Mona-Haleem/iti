import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../componentes/ProductCard';

function Favourite() {
  const favProducts = useSelector((state) => state.favProduct.products);
  console.log(favProducts)
    return (
    <div className=" products-contianer">
    {favProducts?.map((product) => (
        <ProductCard
        product={product}
        key={product.id}
        isCartItem={false}
        />
    ))}
    </div>
  )
}

export default Favourite
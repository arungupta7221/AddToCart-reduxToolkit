import React, { useEffect, useState } from 'react'
import { addToCart } from '../store/cartSlice'
import { useDispatch } from 'react-redux'
const Products = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  const fetchAllProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const result = await res.json()
    console.log(result)
    setProducts(result)
  }
  const handleAdd = (product) => {
    dispatch(addToCart(product))
  }
  useEffect(() => {
    fetchAllProducts()
  }, [])
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default Products

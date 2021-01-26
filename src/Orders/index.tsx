import { useEffect, useState } from 'react'
import './styles.css'
import StepsHeader from './StepsHeader'
import ProdructList from './ProductList'
import { Product } from './types'
import { fetchProducts } from '../api'

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProdructList products={products} />
    </div>
  )
}

export default Orders;
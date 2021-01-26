import ProdructCard from "./ProductCard";
import { Product } from "./types";

type Props = {
  products: Product[];
}

function ProdructList({ products }: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map(product => (
          <ProdructCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default ProdructList;
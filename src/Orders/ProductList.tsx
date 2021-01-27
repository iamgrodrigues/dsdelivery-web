import { checkIfIsSelected } from "./helpers"
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
  products: Product[];
  selectedProdutcs: Product[];
  onSelectProduct: (product: Product) => void;
}

function ProductList({ products, selectedProdutcs, onSelectProduct }: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onSelectProduct={onSelectProduct}
            isSelected={checkIfIsSelected(selectedProdutcs, product)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList;
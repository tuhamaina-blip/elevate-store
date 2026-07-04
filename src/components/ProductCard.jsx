import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-4">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{product.category}</p>
        <Link to={`/products/${product.id}`}>
          <h3 className="font-semibold text-sm mb-1 hover:underline">{product.name}</h3>
        </Link>
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <p className="font-bold">${product.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white text-xs px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
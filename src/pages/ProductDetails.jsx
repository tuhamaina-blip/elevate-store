import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setProduct(found);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/products/${id}/${tab}`);
  };

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (!product) return <p className="text-center py-20 text-red-500">Product not found.</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      {/* Back link */}
      <Link to="/products" className="text-sm text-gray-400 hover:text-black mb-6 inline-block">
        ← Back to Products
      </Link>

      {/* Product Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-xl object-cover h-96"
        />
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">{product.category}</p>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-500 mb-6">{product.description}</p>
          <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors w-full md:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b mb-6 flex gap-6">
        {['overview', 'reviews', 'specifications'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`pb-3 text-sm capitalize transition-colors ${
              activeTab === tab
                ? 'border-b-2 border-black font-semibold'
                : 'text-gray-400 hover:text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Nested Route Content */}
      <Outlet context={{ product }} />
    </div>
  );
}

export default ProductDetails;
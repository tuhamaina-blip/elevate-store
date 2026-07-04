import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

function Cart() {
  const { cart, removeFromCart, clearCart, totalItems, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-24">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-400 mb-6">Looks like you haven't added anything yet.</p>
        <Link
          to="/products"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart ({totalItems} items)</h1>

      <div className="divide-y">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-4 py-4 items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-sm">{item.name}</h3>
              <p className="text-xs text-gray-400">{item.category}</p>
              <p className="text-sm mt-1">
                ${item.price.toFixed(2)} x {item.quantity}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-xs text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="border-t pt-6 mt-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold">Total</p>
          <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={clearCart}
            className="border px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition-colors"
          >
            Clear Cart
          </button>
          <Link
            to="/checkout"
            className="bg-black text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors flex-1 text-center"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
import { Link } from 'react-router-dom';

function OrderConfirmation() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-5xl mb-6">✓</div>
        <h1 className="text-3xl font-bold mb-3">Order Confirmed</h1>
        <p className="text-gray-400 mb-2">Thank you for shopping with Elevate.</p>
        <p className="text-gray-400 mb-8">
          Your order is being processed and will be delivered within 3 to 5 business days.
        </p>
        <Link
          to="/products"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default OrderConfirmation;
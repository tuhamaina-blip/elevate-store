import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { ShoppingCart, LogOut, User } from 'lucide-react';

function Navbar() {
  const { totalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Brand */}
        <Link to="/" className="text-xl font-bold tracking-tight">
          Elevate
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-gray-500 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-gray-500 transition-colors">Products</Link>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Auth */}
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-gray-600">
                <User className="h-4 w-4" />
                {user?.name}
              </span>
              <button onClick={logout} className="flex items-center gap-1 hover:text-gray-500">
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="hover:text-gray-500">Sign In</Link>
              <Link to="/register" className="bg-black text-white px-3 py-1.5 rounded-md text-sm hover:bg-gray-800">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
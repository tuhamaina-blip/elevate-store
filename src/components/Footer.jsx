import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-10">
      
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-white text-lg font-bold mb-3">Elevate</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Premium products curated for those who appreciate quality and craftsmanship.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
            <li><Link to="/cart" className="hover:text-white transition-colors">Cart</Link></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h4 className="text-white font-semibold mb-3">Account</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/login" className="hover:text-white transition-colors">Sign In</Link></li>
            <li><Link to="/register" className="hover:text-white transition-colors">Register</Link></li>
            <li><Link to="/checkout" className="hover:text-white transition-colors">Checkout</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-500">
        <p>© 2026 Elevate. All rights reserved. Built with React and Tailwind CSS.</p>
      </div>

    </footer>
  )
}

export default Footer
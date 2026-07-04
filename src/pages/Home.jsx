import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-950 text-white py-24 px-6 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">New Collection 2026</p>
        <h1 className="text-5xl font-bold tracking-tight mb-6">Crafted for the Discerning</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
          Discover a curated selection of premium products built to last and designed to impress.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/products"
            className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors"
          >
            Shop Now
          </Link>
          <Link
            to="/register"
            className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition-colors"
          >
            Join Elevate
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Accessories', 'Watches', 'Clothing', 'Electronics'].map((category) => (
            <Link
              key={category}
              to={`/products?category=${category}`}
              className="border rounded-lg p-6 text-center hover:bg-gray-50 transition-colors"
            >
              <p className="font-medium">{category}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Style?</h2>
        <p className="text-gray-500 mb-6">Join thousands of members who trust Elevate for premium quality.</p>
        <Link
          to="/products"
          className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
        >
          Browse Products
        </Link>
      </section>
    </div>
  )
}

export default Home
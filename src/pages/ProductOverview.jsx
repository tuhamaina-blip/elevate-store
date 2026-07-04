import { useOutletContext } from 'react-router-dom';

function ProductOverview() {
  const { product } = useOutletContext();
  return (
    <div className="text-gray-600 text-sm leading-relaxed space-y-4">
      <p>{product.description}</p>
      <p>
        Every Elevate product is carefully selected for its quality, durability, and design.
        We source only from the finest craftsmen and manufacturers around the world.
      </p>
    </div>
  );
}

export default ProductOverview;
import { useOutletContext } from 'react-router-dom';

function ProductSpecifications() {
  const { product } = useOutletContext();
  return (
    <div className="text-sm text-gray-600">
      <table className="w-full">
        <tbody className="divide-y">
          <tr>
            <td className="py-2 font-medium w-40">Category</td>
            <td className="py-2 text-gray-500">{product.category}</td>
          </tr>
          <tr>
            <td className="py-2 font-medium">Price</td>
            <td className="py-2 text-gray-500">${product.price.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="py-2 font-medium">Rating</td>
            <td className="py-2 text-gray-500">{product.rating} / 5</td>
          </tr>
          <tr>
            <td className="py-2 font-medium">Availability</td>
            <td className="py-2 text-gray-500">In Stock</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductSpecifications;
const reviews = [
  { name: 'James K.', rating: 5, comment: 'Absolutely stunning quality. Worth every penny.' },
  { name: 'Sofia M.', rating: 4, comment: 'Exceeded my expectations. Will buy again.' },
  { name: 'Liam O.', rating: 5, comment: 'Premium feel, premium experience. Love it.' },
];

function ProductReviews() {
  return (
    <div className="space-y-4">
      {reviews.map((review, index) => (
        <div key={index} className="border rounded-lg p-4">
          <div className="flex justify-between mb-1">
            <p className="font-medium text-sm">{review.name}</p>
            <p className="text-xs text-yellow-500">{'★'.repeat(review.rating)}</p>
          </div>
          <p className="text-sm text-gray-500">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductReviews;
const Sushi = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center mb-6">
      {items.map(item => (
        <div
          key={item.id}
          className="card bg-white max-w-sm w-full shadow-lg rounded-lg overflow-hidden border border-gray-200"
        >
          <figure className="relative">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
            <p className="text-lg text-gray-600 mb-4">{item.description}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div
                className="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg shadow-md"
              >
                PHP. {item.price.toFixed(2)}
              </div>
              <button
                className="btn bg-red-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sushi;

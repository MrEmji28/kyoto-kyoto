function Drinks() {
  return (
    <div className="flex flex-wrap gap-6 justify-center mb-6">
      <div className="card bg-white max-w-sm w-full shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <figure className="relative">
          <img
            src="/images/kyoto-milktea.png"
            alt="Kyoto Milk Tea"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Kyoto Milk  Tea</h2>
          <p className="text-lg text-gray-600 mb-4">A smooth and creamy milk tea infused with a hint of traditional Japanese flavors</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div
              className="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg shadow-md"
            >
              PHP. 120.00
            </div>
            <button
              className="btn bg-red-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-white max-w-sm w-full shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <figure className="relative">
          <img
            src="/images/sakurayu.png"
            alt="Sakurayu"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Sakurayu</h2>
          <p className="text-lg text-gray-600 mb-4">A delicate and aromatic Japanese tea made from dried cherry blossoms</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div
              className="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg shadow-md"
            >
              PHP. 120.00
            </div>
            <button
              className="btn bg-red-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-white max-w-sm w-full shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <figure className="relative">
          <img
            src="/images/black-coffee.png"
            alt="Black Coffee"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Black Coffee</h2>
          <p className="text-lg text-gray-600 mb-4">A robust and full-bodied coffee brewed without milk or sugar, showcasing rich and bold flavors</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div
              className="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg shadow-md"
            >
              PHP. 80.00
            </div>
            <button
              className="btn bg-red-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drinks;

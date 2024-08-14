function Ramen() {
  return (
    <div className="flex flex-wrap gap-6 justify-center mb-6">
      <div className="card bg-white max-w-sm w-full shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <figure className="relative">
          <img
            src="/images/shoyu-ramen.png"
            alt="Shoyu Ramen"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Shoyu Ramen</h2>
          <p className="text-lg text-gray-600 mb-4">A classic ramen featuring a flavorful soy-based broth</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg shadow-md">
              PHP. 150.00
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
            src="/images/tonkotsu-ramen.png"
            alt="Tonkotsu Ramen"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Tonkotsu Ramen</h2>
          <p className="text-lg text-gray-600 mb-4">A rich and creamy ramen made with a savory pork bone broth</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg shadow-md">
              PHP. 150.00
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
            src="/images/miso-ramen.png"
            alt="Sushi Bento"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Miso Ramen</h2>
          <p className="text-lg text-gray-600 mb-4">A hearty ramen with a savory miso-based broth</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg shadow-md">
              PHP. 150.00
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

export default Ramen;

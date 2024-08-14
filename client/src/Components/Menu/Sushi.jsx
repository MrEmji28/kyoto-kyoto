function Sushi() {
  return (
    <div className="flex flex-wrap gap-6 justify-center mb-6">
      <div className="card bg-white max-w-sm w-full shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <figure className="relative">
          <img
            src="/images/salmon-sashimi.png"
            alt="Salmon Sashimi"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Salmon Sashimi</h2>
          <p className="text-lg text-gray-600 mb-4">Fresh, thinly sliced salmon served raw, highlighting its rich, buttery texture and delicate flavor</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div
              className="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg shadow-md"
            >
              PHP. 280.00
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
            src="/images/salmon-nigiri.png"
            alt="Salmon Nigiri"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Salmon Nigiri</h2>
          <p className="text-lg text-gray-600 mb-4">Succulent slices of fresh salmon delicately draped over a small mound of seasoned sushi rice</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div
              className="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg shadow-md"
            >
              PHP. 280.00
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
            src="/images/california-maki.png"
            alt="California Maki"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">California Maki</h2>
          <p className="text-lg text-gray-600 mb-4">A delicious sushi roll featuring a blend of creamy avocado, sweet crab meat, and crisp cucumber</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div
              className="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg shadow-md"
            >
              PHP. 220.00
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

export default Sushi;

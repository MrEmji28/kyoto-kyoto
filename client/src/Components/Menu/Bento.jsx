function Bento() {
  return (
    <div className="flex flex-wrap gap-6 justify-center mb-6">
      <div className="card bg-white max-w-sm w-full shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <figure className="relative">
          <img
            src="/images/katsu-curry.png"
            alt="Pork Katsu Curry Bento"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Pork Katsu Curry Bento</h2>
          <p className="text-lg text-gray-600 mb-4">A delicious bento box with pork katsu curry, rice, and vegetables</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div
              className="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg shadow-md"
            >
              PHP. 200.00
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
            src="/images/chicken-teriyaki.png"
            alt="Chicken Teriyaki Bento"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Chicken Teriyaki Bento</h2>
          <p className="text-lg text-gray-600 mb-4">Tender chicken teriyaki served with rice and vegetables</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div
              className="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg shadow-md"
            >
              PHP. 200.00
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
            src="/images/sushi-bento.png"
            alt="Sushi Bento"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">Sushi Bento</h2>
          <p className="text-lg text-gray-600 mb-4">A delightful sushi bento box with assorted sushi rolls and sides</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div
              className="bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg shadow-md"
            >
              PHP. 200.00
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

export default Bento;

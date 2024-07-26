function Ramen() {
  return (
    <>
      <div className="flex space-x-4 mb-6">
  <div className="card bg-base-100 w-96 shadow-xl">
    <figure className="px-10 pt-10">
      <img
        src="/images/katsu-curry.png"
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Pork Katsu Curry Bento </h2>
      <div className="card-actions">
        <button
          className="btn text-white"
          style={{ backgroundColor: "#D84044" }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  <div className="card bg-base-100 w-96 shadow-xl">
    <figure className="px-10 pt-10">
      <img
        src="/images/chicken-teriyaki.png"
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Chicken Teriyaki Bento</h2>
      <div className="card-actions">
        <button
          className="btn text-white"
          style={{ backgroundColor: "#D84044" }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  <div className="card bg-base-100 w-96 shadow-xl">
    <figure className="px-10 pt-10">
      <img
        src="/images/sushi-bento.png"
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Sushi Bento</h2>
      <div className="card-actions">
        <button
          className="btn text-white"
          style={{ backgroundColor: "#D84044" }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
export default Ramen;

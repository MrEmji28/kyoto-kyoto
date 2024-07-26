function HomeOffer() {
  return (
    <>
      <div className="carousel rounded-box mt-2 flex flex-wrap justify-center sm:carousel-end sm:flex-nowrap"
      style={{backgroundColor: " #E6DED1"}}>
        <div className="carousel-item m-2 relative">
          <img
            src="/images/homeoffer1.png"
            alt="Drink 1"
            className="w-96"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-50 p-4">
            <h3 className="text-white text-lg font-bold">BENTO</h3>
          </div>
        </div>
        <div className="carousel-item m-2 relative">
          <img
            src="/images/homeoffer2.png"
            alt="Drink 2"
            className="w-96"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-50 p-4">
            <h3 className="text-white text-lg font-bold">RAMEN</h3>
          </div>
        </div>
        <div className="carousel-item m-2 relative">
          <img
            src="/images/homeoffer3.png"
            alt="Drink 3"
            className="w-96"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-50 p-4">
            <h3 className="text-white text-lg font-bold">DRINKS</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeOffer;

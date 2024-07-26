function Divider() {
  return (
    <>
      <div className="flex w-full">
        <div
          className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center text-white font-semibold"
          style={{ backgroundColor: "#D84044" }}
        >
          About Us
        </div>
        <div className="divider divider-horizontal"></div>
        <div
          className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center text-white font-semibold"
          style={{ backgroundColor: "#D84044" }}
        >
          Order Now
        </div>
      </div>
    </>
  );
}

export default Divider;

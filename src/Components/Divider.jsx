import React from "react";

function Divider() {
  return (
    <>
      <div className="flex w-full">
        <div
          className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center text-white font-semibold"
          style={{ backgroundColor: "#D84044" }}
        >
          Delivery
        </div>
        <div className="divider divider-horizontal"></div>
        <div
          className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center text-white font-semibold"
          style={{ backgroundColor: "#D84044" }}
        >
          Pick Up
        </div>
      </div>
    </>
  );
}

export default Divider;

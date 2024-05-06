import { React, useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="btn btn-green uppercase text-center m-auto rounded-lg text-white mt-4"
        style={{
          width: "200px",
          height: "50px",
          backgroundColor: "rgba(0, 164, 146, 10)",
          fontSize: "20px",
          fontWeight: "600",
    
        }}
        onClick={() => setShowModal(true)}>
        link
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="absolute inset-0 z-0 backdrop-filter backdrop-blur-sm"></div>{" "}
            <div className="relative w-50 my-6 mx-auto max-w-10xl z-10">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                <iframe width="800" height="700" src="https://www.youtube.com/embed/gf1BOoK5El0?si=DQ4UVJEM8uQ1555t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

import { React, useState } from "react";

export default function ModalUrl() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <center>
        <button
          className="btn btn-green uppercase text-center m-auto rounded-lg text-white mt-10 "
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
      </center>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="absolute inset-0 z-0 backdrop-filter backdrop-blur-sm"></div>{" "}
            <div className="relative w-50 my-6 mx-auto max-w-10xl z-10">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <div className="flex justify-between">
                    <h1 className="uppercase" style={{fontWeight:'600'}}><a href="http://5.133.122.233:88/">Tarozi angren</a></h1>
                    <div style={{width:'100px'}}></div>
                    <h1 className="uppercase" style={{fontWeight:'600'}}><a href="http://5.133.121.60:88">Tarozi Namangan</a></h1>
                  </div>
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

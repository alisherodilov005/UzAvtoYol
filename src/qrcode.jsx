import { React, useState } from "react";
import qr from "./assets/qrcode.png";
export default function ModalThrid() {
  const [showModalThird, setShowModalThird] = useState(false);
  return (
    <>
      <button
        className="btn btn-green uppercase text-center m-auto rounded-lg text-white mt-2"
        style={{
          width: "200px",
          height: "50px",
          backgroundColor: "rgba(0, 164, 146, 10)",
          fontSize: "20px",
          fontWeight: "600",
        }}
        onClick={() => setShowModalThird(true)}>
        link
      </button>
      {showModalThird ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="absolute inset-0 z-0 backdrop-filter backdrop-blur-sm"></div>{" "}
            <div className="relative w-auto my-6 mx-auto max-w-10xl z-10">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <img
                    src={qr}
                    className="mt-auto rounded-xl  "
                    style={{ width: "50%" }}
                    alt=""
                  />
                  <a href="https://license.gov.uz/auth">
                    <h1
                      className="text-center mt-2"
                      style={{ fontWeight: "600", fontSize: "50px" }}>
                      РЕГИСТРАЦИЯ
                    </h1>
                  </a>

                  <p style={{ fontSize: "18px" ,width:'85%'}}>
                    КАТТА ҲАЖМЛИ ВА ОҒИР ВАЗНЛИ ЮКЛАРНИ АВТОМОБИЛЬ ТРАНСПОРТИДА
                    ТАШИШГА br РУХСАТНОМА ОЛИШ УЧУН СКАНЕРЛАНГ
                  </p>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModalThird(false)}>
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

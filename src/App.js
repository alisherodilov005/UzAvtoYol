import bekat from "./assets/news/6_platform-architecture-gt_mob.png";
import distance from "./assets/news/2.png";
import gps from "./assets/locationGPS.png";
import logo from "./assets/logos/3-Photoroom.png-Photoroom.png";
import logo2 from "./assets/logos/4-Photoroom.png-Photoroom.png";
import Modal from "./modal";
import ModalMap from "./map";
import ModalThrid from "./qrcode";
import Modalurl from "./modelUrl";
import four from "./assets/news/data-center-infrastructure-vector-image-png.png";
import last from "./assets/news/4.png";
import first from "./pdfs/ЯГОНА АВТОМАТЛАШТИРИЛГАН АХБОРОТ ТИЗИМИ.pdf"
import second from "./pdfs/АСФАЛТ-БЕТОН ЗАВОДЛАР СХЕМАСИ.pdf"
import third from "./pdfs/МАХСУС ТРАНСПОРТ ВОСИТАЛАРИ МОНИТОРИНГИ.pdf"
import fourPDF from "./pdfs/МАЪЛУМОТЛАРНИ ҚАЙТА ИШЛАШ ВА САҚЛАШ МАРКАЗИ.pdf"
function App() {
  return (
    <div
      style={{
        background: `linear-gradient(180deg, rgba(0, 62, 55, 0.8), rgba(0, 164, 146, 0.8))`,
        height: "100%",
      }}
      className="h-full">
      <center>
        <div className="flex md:flex-row justify-between p-10 ">
          <div className="md:w-1/3">
            <div className="flex w-full items-center">
              <img src={logo} alt="" style={{ width: "15%" }} />
              <div style={{ width: "10px" }}></div>
              <h1 style={{ fontWeight: "600" }}>
                ЎЗБЕКИСТОН РЕСПУБЛИКАСИ АВТОМОБИЛ ЙЎЛЛАРИ ДАВЛАТ ҚЎМИТАСИ
              </h1>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="flex w-full items-center">
              <img src={logo2} alt="" style={{ width: "15%" }} />
              <div style={{ width: "20px" }}></div>
              <h1 style={{ fontWeight: "600" }}>
                AВТОМОБИЛЬ ЙЎЛЛAРИ ҚЎМИТAСИ ҚОШИДАГИ АХБОРОТ - КОММУНИКАТСИЯ
                ТЕХНОЛОГИЯЛАРИНИ РИВОЖЛАНТИРИШ МАРКАЗИ
              </h1>
            </div>
          </div>
        </div>
      </center>
      <div className="container m-auto w-full h-full">
        <div>
          <br />
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-6">
            <div
              className="max-w-sm overflow-hidden shadow-lg bg-white m-3 flex flex-col"
              style={{
                background: `linear-gradient(120deg,#5298A4, #C6D9DD, #5B8C86)`,
                borderRadius: "25px",
                height: "510px",
                boxShadow: "0px 0px 70px rgba(0, 62, 55, 0.8)",
              }}>
              <div className="px-6 py-4 flex-grow">
                <div
                  className="font-bold text-xl mb-2 uppercase text-center text-black mt-10"
                  style={{ fontSize: "18px", textShadow: "0px 0px 3px black" }}>
                  ЯГОНА АВТОМАТЛАШТИРИЛГАН АХБОРОТ ТИЗИМИ
                </div>
                <center>
                  <a href={first}>
                  <button
                    className="btn btn-green uppercase text-center m-auto rounded-lg text-white mt-2"
                    style={{
                      width: "200px",
                      height: "50px",
                      backgroundColor: "rgba(0, 164, 146, 10)",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}>
                    link
                  </button>
                  </a>
                  
                </center>
              </div>
              <img
                src={bekat}
                className="mt-auto rounded-xl w-full  p-5"
                alt=""
              />
            </div>
            <div
              className="max-w-sm overflow-hidden shadow-lg bg-white m-3 flex flex-col"
              style={{
                background: `linear-gradient(120deg,#5298A4, #C6D9DD, #5B8C86)`,
                borderRadius: "25px",
                boxShadow: "0px 0px 70px rgba(0, 62, 55, 0.8)",
                height: "510px",
              }}>
              <div className="px-6 py-4 flex-grow">
                <div
                  className="font-bold uppercase text-xl mb-2 text-center text-black mt-10"
                  style={{ fontSize: "18px", textShadow: "0px 0px 3px black" }}>
                  АСФАЛТ-БЕТОН ЗАВОДЛАР СХЕМАСИ
                </div>
                <center>
                <a href={second}>
                  <button
                    className="btn btn-green uppercase text-center m-auto rounded-lg text-white mt-10"
                    style={{
                      width: "200px",
                      height: "50px",
                      backgroundColor: "rgba(0, 164, 146, 10)",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}>
                    link
                  </button>
                  </a>
                </center>
              </div>
              <center>
                <img
                  src={distance}
                  className="mt-auto rounded-xl  p-2"
                  style={{ width: "100%" }}
                  alt=""
                />
              </center>
            </div>
            <div
              className="max-w-sm overflow-hidden shadow-lg bg-white m-3 flex flex-col"
              style={{
                background: `linear-gradient(120deg,#5298A4, #C6D9DD, #5B8C86)`,
                borderRadius: "25px",
                height: "500px",
                boxShadow: "0px 0px 70px rgba(0, 62, 55, 0.8)",
              }}>
              <div className="px-6 py-4 flex-grow">
                <div
                  className="font-bold text-xl mb-2 text-center uppercase text-black mt-10"
                  style={{ fontSize: "18px", textShadow: "0px 0px 3px black" }}>
                  МАХСУС ТРАНСПОРТ ВОСИТАЛАРИ МОНИТОРИНГИ
                </div>
                <center>
                <a href={third}>
                  <button
                    className="btn btn-green uppercase text-center m-auto rounded-lg text-white mt-5"
                    style={{
                      width: "200px",
                      height: "50px",
                      backgroundColor: "rgba(0, 164, 146, 10)",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}>
                    link
                  </button>
                  </a>
                </center>
              </div>
              <center>
                <img
                  src={gps}
                  className="mt-auto rounded-xl w-full p-10"
                  alt=""
                />
              </center>
            </div>
            <div
              className="max-w-sm overflow-hidden shadow-lg uppercase bg-white m-3 flex flex-col"
              style={{
                background: `linear-gradient(120deg,#5298A4, #C6D9DD, #5B8C86)`,
                borderRadius: "25px",
                boxShadow: "0px 0px 70px rgba(0, 62, 55, 0.8)",
                height: "500px",
              }}>
              <div className="px-6 py-4 flex-grow">
                <div
                  className="font-bold text-xl mb-2 text-center text-black mt-10"
                  style={{ fontSize: "18px", textShadow: "0px 0px 2px black" }}>
                  МАЪЛУМОТЛАРНИ ҚАЙТА ИШЛАШ ВА САҚЛАШ МАРКАЗИ
                </div>

                <center>
                <a href={fourPDF}>
                  <button
                    className="btn btn-green uppercase text-center m-auto rounded-lg text-white mt-5"
                    style={{
                      width: "200px",
                      height: "50px",
                      backgroundColor: "rgba(0, 164, 146, 10)",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}>
                    link
                  </button>
                  </a>
                </center>
              </div>
              <img
                src={four}
                className="mt-auto rounded-xl w-full p-10"
                alt=""
              />
            </div>
            <div
              className="max-w-sm overflow-hidden shadow-lg uppercase bg-white m-3 flex flex-col"
              style={{
                background: `linear-gradient(120deg,#5298A4, #C6D9DD, #5B8C86)`,
                borderRadius: "25px",
                boxShadow: "0px 0px 70px rgba(0, 62, 55, 0.8)",
                height: "500px",
              }}>
              <div className="px-6 py-4 flex-grow">
                <div
                  className="font-bold text-xl mb-2 text-center text-black mt-10"
                  style={{ fontSize: "18px", textShadow: "0px 0px 2px black" }}>
                  МАХСУС ТАРОЗИЛАР МОНИТОРИНГИ
                </div>
                <Modalurl />
              </div>
              <img
                src={last}
                className="mt-auto rounded-xl w-full p-10"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center items-center"></div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;

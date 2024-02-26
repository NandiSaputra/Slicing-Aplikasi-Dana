import { Icon } from "@iconify/react";
import Slider from "react-slick";

function MainContent() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="relative top-[-90px] ">
        <div className=" flex flex-col items-center justify-center ">
          <div className=" border-2 w-[90%] bg-white rounded-xl px-2 py-5 ">
            <div className="flex flex-row items-center justify-around ">
              <div className="flex flex-row items-center gap-2">
                <img
                  src="assets/lazada.png"
                  className="rounded-full w-[40px] h-[40px]"
                  alt=""
                />
                <div>
                  <h1 className="font-bold text-base">Diskon s/d 50%</h1>
                  <span className="text-sm text-amber-500 ">
                    Dapetin Gratis Sekarang
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="bg-blue-500 text-white h-8 w-20 rounded-sm "
              >
                LIHAT
              </button>
            </div>
            <div className="flex justify-center items-center mt-3">
              <div className="grid grid-cols-4 gap-x-7 gap-y-2 ">
                <div className="flex flex-col items-center">
                  <Icon
                    icon="ic:twotone-smartphone"
                    className="text-5xl text-orange-600"
                  />
                  <span className="text-center text-sm">Pulsa & Data</span>
                </div>
                <div className="flex flex-col items-center">
                  <Icon icon="mdi:gold" className="text-5xl text-amber-500" />
                  <span className="text-center text-sm">eMAS</span>
                </div>{" "}
                <div className="flex flex-col items-center">
                  <Icon
                    icon="material-symbols:rewarded-ads"
                    className="text-5xl text-blue-500"
                  />

                  <span className="text-center text-sm">A+ Reward</span>
                </div>{" "}
                <div className="flex flex-col items-center">
                  <Icon
                    icon="ri:shield-cross-fill"
                    className="text-5xl text-blue-300"
                  />
                  <span className="text-center text-sm">DANA Siaga</span>
                </div>{" "}
                <div className="flex flex-col items-center">
                  <Icon
                    icon="tdesign:dart-board"
                    className="text-5xl text-red-500"
                  />
                  <span className="text-center text-sm">DANA Goals</span>
                </div>{" "}
                <div className="flex flex-col items-center">
                  <Icon
                    icon="ant-design:red-envelope-filled"
                    className="text-5xl text-blue-500"
                  />
                  <span className="text-center text-sm">DANA Kaget</span>
                </div>{" "}
                <div className="flex flex-col items-center">
                  <Icon
                    icon="ion:game-controller"
                    className="text-5xl text-red-500"
                  />
                  <span className="text-center text-sm">Item Digital</span>
                </div>{" "}
                <div className="flex flex-col items-center">
                  <Icon
                    icon="mingcute:dot-grid-fill"
                    className="text-5xl text-gray-500"
                  />
                  <span className="text-center text-sm">Lihat Semua</span>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-2 ">
          <div className="  w-[90%] border-2 bg-white rounded-xl ">
            <div className="flex flex-row items-center justify-between p-3">
              <div className="flex flex-col items-start">
                <h1 className="text-xl font-bold">Feed</h1>
                <span className="text-[10px]">
                  Cari tahu kabar terbaru teman-temanmu!
                </span>
              </div>
              <button
                type="button"
                className=" text-blue-500 h-8 w-24 rounded-sm border-blue-500 border-2"
              >
                Telusuri
              </button>
            </div>
            <div className="overflow-hidden ">
              <Slider arrows={false} {...settings}>
                <div className="flex flex-row items-center ">
                  <div className="flex flex-row items-center px-5 gap-2 mb-5">
                    <img
                      src="assets/man-person-icon.png"
                      alt=""
                      className="w-[50px] rounded-full bg-blue-200 border-orange-600 border-2"
                    />
                    <p>
                      <b>Teman Kamu</b> berhasil Mendapatkan{" "}
                      <span className="text-amber-500">DANA Kaget</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center ">
                  <div className="flex flex-row items-center px-5 gap-2 mb-5">
                    <img
                      src="assets/young-girl-icon.png"
                      alt=""
                      className="w-[50px] rounded-full bg-blue-200 border-orange-600 border-2"
                    />
                    <p>
                      <b>Teman Kamu</b> Mendapatkan Cashback{" "}
                      <span className="text-amber-500">Merchat</span>
                    </p>
                  </div>
                </div>

                {/* Item carousel lainnya di sini */}
              </Slider>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5 ">
          <div className=" h-[100px] w-[90%] border-2 bg-white rounded-xl"></div>
        </div>
        <div className="flex justify-center mt-5 ">
          <div className=" h-[100px] w-[90%] border-2 bg-white rounded-xl"></div>
        </div>
        <div className="flex justify-center mt-5 ">
          <div className=" h-[100px] w-[90%] border-2 bg-white rounded-xl"></div>
        </div>
      </div>
    </>
  );
}
export default MainContent;

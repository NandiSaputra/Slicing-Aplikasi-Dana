import { FaHome, FaNewspaper, FaWallet } from "react-icons/fa";
import { MdPerson, MdOutlineQrCodeScanner } from "react-icons/md";

import Links from "../utility/Link";

function Botombar() {
  return (
    <div className="fixed bottom-0 z-10 w-full border-t-2 bg-white">
      <div className="flex h-16 items-center ">
        <div className="w-1/2 flex justify-around">
          <ul className="flex justify-around  ">
            <Links to="" classname="flex flex-col items-center">
              <FaHome className=" text-3xl" />
              <span className="text-xs text-gray-500">Beranda</span>
            </Links>
          </ul>
          <ul className="flex justify-around ">
            <Links to="" classname="flex flex-col items-center  ">
              <FaNewspaper className=" text-3xl" />

              <span className="text-xs text-gray-500">Aktivitas</span>
            </Links>
          </ul>
        </div>
        <div className="w-1/4 relative text-white">
          <div className="  h-[80px] w-[80px] border-2 border-transparent rounded-full  absolute  bottom-[-25px] left-1/2 transform -translate-x-1/2 bg-blue-500">
            <Links
              to=""
              classname=" hover:text-blue-950 flex flex-col items-center py-3"
            >
              <MdOutlineQrCodeScanner className="text-4xl " />
              <span>Pay</span>
            </Links>
          </div>
        </div>
        <div className="w-1/2 flex justify-around">
          <ul className="flex justify-around ">
            <Links to="" classname="flex flex-col items-center">
              <FaWallet className=" text-3xl" />
              <span className="text-xs text-gray-500">Dompet</span>
            </Links>
          </ul>
          <ul className="flex justify-around ">
            <Links to="" classname="flex flex-col items-center">
              <MdPerson className=" text-3xl" />
              <span className="text-xs text-gray-500">Saya</span>
            </Links>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Botombar;

import { FaHome, FaNewspaper, FaWallet } from "react-icons/fa";
import { MdPerson, MdOutlineQrCodeScanner } from "react-icons/md";
import { Link } from "react-router-dom";

function Botombar() {
  return (
    <div className="absolute bottom-0 w-full border-t-2">
      <div className="flex h-16 items-center ">
        <div className="w-1/2 flex justify-around">
          <ul className="flex justify-around ">
            <Link to="/Beranda" className="flex flex-col items-center">
              <FaHome className=" text-3xl" />
              <span className="text-xs text-gray-500">Beranda</span>
            </Link>
          </ul>
          <ul className="flex justify-around ">
            <Link to="/aktivitas" className="flex flex-col items-center">
              <FaNewspaper className=" text-3xl" />

              <span className="text-xs text-gray-500">Aktivitas</span>
            </Link>
          </ul>
        </div>
        <div className="w-1/4 relative text-white">
          <div className=" h-[80px] w-[80px] border-2 border-transparent rounded-full  absolute  bottom-[-25px] left-1/2 transform -translate-x-1/2 bg-blue-500">
            <ul className="flex flex-col items-center ">
              <Link to="/pay" className="flex flex-col items-center py-3">
                <MdOutlineQrCodeScanner className="text-4xl " />
                <span>Pay</span>
              </Link>
            </ul>
          </div>
        </div>
        <div className="w-1/2 flex justify-around">
          <ul className="flex justify-around ">
            <Link to="/wallet" className="flex flex-col items-center">
              <FaWallet className=" text-3xl" />
              <span className="text-xs text-gray-500">Dompet</span>
            </Link>
          </ul>
          <ul className="flex justify-around ">
            <Link to="/profile" className="flex flex-col items-center">
              <MdPerson className=" text-3xl" />
              <span className="text-xs text-gray-500">Saya</span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Botombar;

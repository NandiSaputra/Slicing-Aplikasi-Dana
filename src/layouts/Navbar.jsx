import { MdFlagCircle } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { LuScanLine } from "react-icons/lu";
import { MdAccountBalanceWallet } from "react-icons/md";
import { MdSendToMobile } from "react-icons/md";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Icon } from "@iconify/react";

function Navbar() {
  const [open, setOpen] = useState(true);
  const [hideSaldoTransition, setHideSaldoTransition] = useState(false);

  const hideSaldo = () => {
    setHideSaldoTransition(true);
    setTimeout(() => {
      setOpen(!open);
      setHideSaldoTransition(false);
    }, 300); // Ubah angka sesuai dengan durasi transisi dalam milidetik
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-10 text-white bg-blue-500">
        <div className="flex justify-between p-3">
          <button
            onClick={hideSaldo}
            className={`flex items-center gap-2 transition duration-300 ${
              hideSaldoTransition ? "opacity-0" : "opacity-100"
            }`}
          >
            <MdFlagCircle className="text-white text-4xl" />
            {open ? (
              <div className="flex items-center gap-2">
                <BsThreeDots className="text-3xl" />
                <FaEye />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span>Rp. 99.999.9999</span> <Icon icon="ion:eye-off" />
              </div>
            )}
          </button>
          <div className="flex items-center">
            <IoMdMail className="text-white text-4xl" />
          </div>
        </div>
      </nav>
      <div className="bg-blue-500 text-white pt-16 h-56">
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <LuScanLine className="text-4xl" />
            <span className="text-sm">Pindai</span>
          </div>
          <div className="flex flex-col items-center">
            <MdAccountBalanceWallet className="text-4xl" />
            <span className="text-sm">Isi saldo</span>
          </div>
          <div className="flex flex-col items-center">
            <MdSendToMobile className="text-4xl" />
            <span className="text-sm">Kirim</span>
          </div>
          <div className="flex flex-col items-center">
            <VscGitPullRequestGoToChanges className="text-4xl" />
            <span className="text-sm">Minta</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

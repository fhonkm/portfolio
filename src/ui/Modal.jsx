import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaDiscord } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import CopyToClipboard from "react-copy-to-clipboard";

function Modal({ closeModal, isOpen }) {
  const [contactDiscordClick, setContactDiscordClick] = useState("fhonk_");
  const [contactEmailClick, setContactEmailClick] =
    useState("fhonkm@gmail.com");
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) closeModal(false);
    }

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  function handleContactClick(setStateFunction, initialValue, newValue) {
    setStateFunction(newValue);
    setTimeout(() => {
      setStateFunction(initialValue);
    }, 1500);
  }

  return createPortal(
    <div className="fixed left-0 top-0 z-50 h-screen w-full text-white backdrop-blur-sm backdrop-filter transition-all duration-500">
      <div
        ref={ref}
        className="fixed left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-sky-900 p-8 shadow-lg transition-all duration-500"
      >
        <section className="flex flex-col gap-2">
          <header className="relative mb-2 flex items-center justify-between">
            <div>
              <p className="text-xl">Contact me</p>
              <p className="text-sm text-slate-300">
                Click to copy to your clipboard.
              </p>
            </div>
            <button
              className="absolute right-0 top-0 hover:scale-105"
              onClick={() => closeModal(false)}
            >
              <FaXmark />
            </button>
          </header>

          <CopyToClipboard text={"fhonk_"}>
            <button
              onClick={() =>
                handleContactClick(
                  setContactDiscordClick,
                  "fhonk_",
                  "Copied to clipboard",
                )
              }
              className="w-62 rounded-lg bg-sky-500 px-4 py-1 text-white shadow-lg duration-100 hover:scale-[103%]"
            >
              <div className="flex items-center gap-2">
                <FaDiscord className="text-3xl" />
                {contactDiscordClick}
              </div>
            </button>
          </CopyToClipboard>

          <CopyToClipboard text={"fhonkm@gmail.com"}>
            <button
              onClick={() =>
                handleContactClick(
                  setContactEmailClick,
                  "fhonkm@gmail.com",
                  "Copied to clipboard",
                )
              }
              className="w-62 rounded-lg bg-sky-500 px-4 py-1 text-white shadow-lg duration-100 hover:scale-[103%]"
            >
              <div className="flex items-center gap-2">
                <MdOutlineEmail className="text-3xl" />
                {contactEmailClick}
              </div>
            </button>
          </CopyToClipboard>
        </section>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;

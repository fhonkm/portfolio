/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import CopyToClipboard from "react-copy-to-clipboard";

function Modal({ closeModal, isOpen }) {
  const [contactClicks, setContactClicks] = useState({});
  const ref = useRef();

  const socials = [
    { user: "miggyyboi", id: "github" },
    { user: "fhonkm@gmail.com", id: "email" },
    { user: "fhonk_", id: "discord" },
  ];

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) closeModal(false);
    }

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  function handleContactClick(socialId) {
    setContactClicks((prev) => ({
      ...prev,
      [socialId]: "Copied to clipboard",
    }));

    setTimeout(() => {
      setContactClicks((prev) => ({
        ...prev,
        [socialId]: "",
      }));
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

          {socials.map((social) => (
            <div key={social.id}>
              <CopyToClipboard
                text={social.user}
                onCopy={() => handleContactClick(social.id)}
              >
                <button className="w-62 w-full rounded-lg bg-sky-500 px-4 py-1 text-white shadow-lg duration-100 hover:scale-[103%]">
                  <div className="flex items-center gap-2">
                    {social.id === "discord" && (
                      <FaDiscord className="text-3xl" />
                    )}
                    {social.id === "email" && (
                      <MdOutlineEmail className="text-3xl" />
                    )}
                    {social.id === "github" && (
                      <FaGithub className="text-3xl" />
                    )}
                    {contactClicks[social.id] === "Copied to clipboard"
                      ? "Copied to clipboard"
                      : social.user}
                  </div>
                </button>
              </CopyToClipboard>
            </div>
          ))}
        </section>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;

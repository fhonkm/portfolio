/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { FaXmark } from "react-icons/fa6";

function Nav() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleClick() {
    setIsOpenModal((prev) => !prev);
  }

  return (
    <section
      id="nav"
      className="mx-auto max-w-6xl flex-row items-center justify-between px-6 py-1"
    >
      <nav className="flex items-center justify-between">
        <div>
          <Link to="/">
            <img
              src="/migsNavbarLogo.png"
              alt="Migs Navbar"
              className="h-20 w-20 duration-150 hover:scale-105 hover:cursor-pointer"
              title="Homepage"
            />
          </Link>
        </div>

        <div>
          <button
            onClick={() => handleClick()}
            className="rounded-lg bg-sky-500 px-4 py-1 font-baiJum text-white shadow-lg duration-150 hover:scale-105"
          >
            Contact me
          </button>
        </div>

        {isOpenModal && (
          <Modal closeModal={setIsOpenModal} isOpen={isOpenModal} />
        )}
      </nav>
    </section>
  );
}

export default Nav;

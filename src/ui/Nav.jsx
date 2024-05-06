/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Button from "./Button";

function Nav() {
  const [isModal, setIsModal] = useState(false);

  function handleClick() {
    setIsModal((prev) => !prev);
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
          <Button onClick={handleClick}>Contact me</Button>
        </div>

        {isModal && (
          <Modal closeModal={setIsModal} isOpen={isModal} />
        )}
      </nav>
    </section>
  );
}

export default Nav;

import { useState } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Nav() {
  const [modalClick, setModalClick] = useState("Contact me");

  function handleClick() {
    setModalClick("Discord copied! @fhonk_");
    setTimeout(() => {
      setModalClick("Contact me");
    }, 2000);
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
              src="/public/migsNavbarLogo.png"
              alt="Migs Navbar Logo"
              className="h-20 w-20 duration-150 hover:scale-105 hover:cursor-pointer"
              title="Homepage"
            />
          </Link>
        </div>

        <div>
          <CopyToClipboard text={"fhonk_"}>
            <button
              onClick={() => handleClick()}
              className="rounded-lg bg-sky-500 px-4 py-1 font-baiJum text-white shadow-lg duration-150 hover:scale-105"
            >
              {modalClick}
            </button>
          </CopyToClipboard>
        </div>
      </nav>
    </section>
  );
}

export default Nav;

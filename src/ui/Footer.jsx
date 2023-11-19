import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <section id="footer">
      <div className="mx-auto my-6 flex max-w-6xl items-center justify-between px-6 font-baiJum">
        <div className="md:text-md text-sm">
          <p>fhonkM © 2023</p>
          <p>
            This website is built using
            <span className="text-sky-500"> Vite + React.</span>
          </p>
          <p className="text-xs">
            Disclaimer: Only a portfolio showcase; not accepting commissions at
            this moment.
          </p>
        </div>

        <div>
          <a
            href="https://github.com/miggyyboi"
            target="_blank"
            rel="noreferrer"
            title="Go to my github"
            className="text-2xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;

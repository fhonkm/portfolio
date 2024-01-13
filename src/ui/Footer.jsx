import { FaGithub } from "react-icons/fa6";
import Border from "./Border";

function Footer() {
  return (
    <section id="footer">
      <Border />
      <div className="mx-auto my-6 flex max-w-6xl items-center justify-between px-6">
        <div className="md:text-md text-sm">
          <p>fhonkM © 2023</p>
          <p>
            This website is built using
            <span className="text-sky-500 hover:text-sky-600 hover:scale-105"><a href="https://vitejs.dev/guide/">Vite + React.</a></span>
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

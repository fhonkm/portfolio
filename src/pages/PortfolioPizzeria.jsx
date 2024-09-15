import { useEffect } from "react";

import Button from "../ui/Button";
import ImageCard from "../ui/ImageCard";
import { workList } from "../workList";
import { FaGithub } from "react-icons/fa6";

function PortfolioPizzeria() {
  useEffect(() => {
    document.title = "fhonk_ | Pizzeria";

    return () => (document.title = "fhonk_ | Homepage");
  }, []);

  return (
    <section id="examplePort">
      <div className="mx-auto mt-6 flex max-w-6xl flex-col justify-between px-6">
        <section className="space-x-2">
          <div className="flex w-1/2 flex-col space-y-2 sm:w-full sm:flex-row sm:space-x-2 sm:space-y-0">
            <Button type="Link" to="/">
              &lArr; Go to homepage
            </Button>
            <Button type="Link" to="/portfolio">
              &lArr; Go to portfolio
            </Button>
          </div>
        </section>

        <section className="mt-12">
          <h1 className="mb-4 text-4xl">Pizzeria</h1>
          <div className="flex flex-col gap-24 sm:flex-row">
            <div className="space-y-8">
              <div>
                <p className="text-slate-500">Description</p>
                <p>
                  A concept pizza store to reinforce my Redux Toolkit and Redux
                  Toolkit Query knowledge. It includes
                  <span className="font-semibold italic">
                    &nbsp;cart and geolocation (get your address)&nbsp;
                  </span>
                  functionality.
                </p>
              </div>
              <div>
                <p className="text-slate-500">Technologies Used</p>
                <p>
                  Vite + React, React Router, Redux Toolkit, Redux Toolkit Query
                </p>
              </div>
              <div>
                <p className="text-slate-500">Source Code</p>
                <Button>
                  <a
                    href="https://github.com/miggyyboi/Pizzeria-Store"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h1 className="text-4xl">Pizzeria Images</h1>
          <div className="mx-auto mt-6 grid w-4/5 grid-cols-1 gap-4 md:w-full md:grid-cols-2">
            {workList[0].imgSrc.map((img, index) => (
              <ImageCard src={img} alt={workList[0].workName} key={index} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default PortfolioPizzeria;

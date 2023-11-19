import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Border from "../ui/Border";

function Portfolio() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <section id="examplePort">
      <div className="mx-auto mt-6 flex max-w-6xl flex-col justify-between px-6 font-baiJum">
        <section>
          <button
            onClick={() => navigate(-1)}
            className="rounded-lg bg-sky-500 px-4 py-1 text-white shadow-lg duration-150 hover:scale-105"
          >
            &lArr; Go back
          </button>
        </section>

        <section className="mt-12">
          <h1 className="text-4xl">Example Page</h1>
          <div className="mt-6 flex flex-col space-y-2 md:flex-row md:space-x-36 md:space-y-0">
            <p className="text-slate-500">Description</p>
            <p className="">
              A sample portfolio page where I will store future projects/works.
              Projects to come soon.
            </p>
          </div>
          <div className="mt-6 flex flex-col space-y-2 md:flex-row md:space-x-[5.5rem] md:space-y-0">
            <p className="text-slate-500">Technologies Used</p>
            <p className="">Example, Example, Example</p>
          </div>
        </section>

        <section className="mt-12">
          <h1 className="text-4xl">Example Images</h1>
          <div className="mx-auto mt-6 grid w-4/5 grid-cols-1 gap-4 md:w-full md:grid-cols-2">
            <div className="flex h-64 items-center justify-center rounded-lg border border-sky-500 bg-sky-100 duration-150 hover:scale-[102%] hover:opacity-80">
              Example
            </div>
            <div className="flex h-64 items-center justify-center rounded-lg border border-sky-500 bg-sky-100 duration-150 hover:scale-[102%] hover:opacity-80">
              Example
            </div>
            <div className="flex h-64 items-center justify-center rounded-lg border border-sky-500 bg-sky-100 duration-150 hover:scale-[102%] hover:opacity-80">
              Example
            </div>
            <div className="flex h-64 items-center justify-center rounded-lg border border-sky-500 bg-sky-100 duration-150 hover:scale-[102%] hover:opacity-80">
              Example
            </div>
          </div>
        </section>
      </div>
      <Border />
    </section>
  );
}

export default Portfolio;

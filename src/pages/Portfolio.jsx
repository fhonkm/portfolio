import { useEffect } from "react";

import Button from "../ui/Button";
import ImageCard from "../ui/ImageCard";

function Portfolio() {
  useEffect(() => {
    document.title = "fhonk_ | Portfolio";

    return () => (document.title = "fhonk_ | Homepage");
  }, []);

  return (
    <section id="examplePort">
      <div className="mx-auto mt-6 flex max-w-6xl flex-col justify-between px-6">
        <section>
          <Button type="Link" to="/">
            &lArr; Go to homepage
          </Button>
        </section>

        <section className="mt-12">
          <h1 className="text-3xl">Listed Works</h1>
          <div className="mx-auto mt-6 grid w-4/5 grid-cols-1 gap-4 md:w-full md:grid-cols-2">
            <div>
              <ImageCard
                src="/portfolioImages/pizzeria-2.png"
                altName="Pizzeria Image"
                workLink="/portfolio/pizzeria"
              />
              <p className="text-lg">Pizzeria</p>
            </div>
            <div>
              <ImageCard src="/placeholder.svg" altName="Soon" />
              <p className="text-lg">Soon</p>
            </div>
            <div>
              <ImageCard src="/placeholder.svg" altName="Soon" />
              <p className="text-lg">Soon</p>
            </div>
            <div>
              <ImageCard src="/placeholder.svg" altName="Soon" />
              <p className="text-lg">Soon</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Portfolio;

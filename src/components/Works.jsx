import ImageCard from "../ui/ImageCard";

function Works() {
  return (
    <section id="works">
      <h2 className="mx-auto mb-6 max-w-6xl px-10 text-center text-2xl md:text-left">
        Recent Works
      </h2>
      <div className="mx-auto max-w-6xl">
        <div className="mx-6 grid grid-cols-1 space-y-4 md:grid-cols-2 md:flex-row md:gap-4 md:space-y-0">
          <ImageCard
            src="/portfolioImages/pizzeria-2.png"
            altName="Pizzeria Image"
            workLink="/portfolio/pizzeria"
          />

          <ImageCard
            src="/placeholder.svg"
            altName="Soon Image"
            workLink="/portfolio"
          />
        </div>
      </div>
    </section>
  );
}

export default Works;

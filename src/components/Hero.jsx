import SkillItem from "./SkillItem";
import Border from "../ui/Border";

function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto mt-6 flex max-w-6xl flex-col items-center justify-between px-6">
        <div className="rounded-full bg-sky-500 p-4 duration-150 hover:scale-105">
          <img
            src="/migsLogo.png"
            alt="Migs Front Logo"
            className="h-98 w-98 md:h-92 md:w-92 rounded-full"
          />
        </div>

        <div>
          <h2 className="mb-6 mt-12 text-center text-5xl">
            hey, I am <span className="text-7xl text-sky-900">migs</span> 👋
          </h2>
          <p className="leading-8s max-w-md px-6 text-center text-gray-500 md:max-w-lg">
            I am thrilled to have you here! I am an enthusiastic programmer
            with a passion for everything programming related. I always seek to upskill
            myself, ensuring that I not only keep pace with advancing
            technologies but also continuously hone my craft!
          </p>
        </div>

        <div className="mx-auto mt-12 flex w-full max-w-md flex-row justify-between rounded-xl bg-gradient-to-r from-sky-500 to-sky-400 px-10 py-3 text-white shadow-2xl">
          <SkillItem src="/reactLogo.svg" skillName="React" />
          <SkillItem src="/reduxLogo.svg" skillName="Redux" />
          <SkillItem src="/javascriptLogo.svg" skillName="JavaScript" />
        </div>
      </div>
      <Border />
    </section>
  );
}

export default Hero;

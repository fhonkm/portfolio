import AboutSkill from "./AboutSkill";
import Border from "../ui/Border";

// function calculateAge(birthdate) {
//   const today = new Date();
//   const birthday = new Date(birthdate);
//   const ageNow = today.getFullYear() - birthday.getFullYear();
//   return ageNow;
// }

function About() {
  // const age = calculateAge("2002-11-01");

  return (
    <section id="aboutMe" className="my-12">
      <h2 className="mx-auto max-w-6xl px-10 text-center text-2xl lg:text-left">
        Who am I?
      </h2>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between px-6 md:mt-10 lg:flex-row">
        <AboutSkill />

        <div className="mt-10 flex w-full items-center justify-center px-4 pb-6 lg:w-1/2">
          <div className="space-y-4 rounded-xl bg-sky-500 p-6 text-white shadow-xl">
            <div>
              Hey, I am Migs! An aspiring programmer.
            </div>
            <div>
              I started off as every programmer - a gamer 🤓 - which then piqued
              my interest in everything computer related. I picked up Java as my
              first programming language. Here I am now, exploring the vast landscape
              of the programming world! 💻
            </div>
            <div className="flex flex-row items-center">
              Currently learning:
              <img
                src="/pythonLogo.svg"
                alt="Python Logo"
                className="ml-2 h-6 w-6"
                title="Python"
              />
            </div>
          </div>
        </div>
      </div>
      <Border />
    </section>
  );
}

export default About;

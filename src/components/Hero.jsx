import img from "../assets/hero.svg"
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";

const Hero = () => {
  return (
      <section className="bg-emerald-100 py-24">
        <div className="align-element grid md:grid-cols-2 items-center gap-8">
          <article>
            <h1 className="text-7xl font-bold tracking-wider">I'm Dávid</h1>
            <h4 className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
              Front-End Developer
            </h4>
            <p className="mt-2 text-lg text-slate-700 tracking-wide capitalize ">
              Making moderns UI webs is my passion
            </p>
            <div className="flex gap-x-4 mt-4">
              <a
                href="https://github.com/DavidInglody"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/d%C3%A1vid-inglody-2b87ab282/"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
              </a>
              <a
                href="https://www.facebook.com/daweed.inglody/"
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebookSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
              </a>
              <a
                href="https://www.instagram.com/david_inglody/"
                rel="noreferrer"
                target="_blank"
              >
                <FaInstagramSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
              </a>
            </div>
          </article>
          <article className="hidden md:block">
            <img src={img} className="h-80 lg:h-96" />
          </article>
        </div>
      </section>
  );
}
export default Hero
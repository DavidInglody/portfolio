import { Fade } from "react-awesome-reveal";
import aboutSvg from "../assets/about.svg";
import AboutParagraph from "./AboutParagraph";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <Fade cascade damping={0.1}>
            <SectionTitle text="About me" />
            <AboutParagraph
              header="Addition Libraries, Programs"
              text="In development and many project I work with libraries like: Rect Vite,
        Tailwind CSS, Styled-components, Redux, Axios, React Slick, React
        Toastify, Values.js, React Query, Unsplash API, Contenful SDK, Fusion
        Charts, Auth0, serverless functions, nanoID, Figma, Canva..."
            />
            <AboutParagraph
              header="Carrier"
              text="In my previous work, as a soldier, I felt like, I'm able to do something harder and useful. I tried to start programming and I love it. After one year of learning, I decided to leave my previous work and give 100 % to programming and
            education too. I have fun there with some courses, web projects, games and
            images designs. In the future, I want to learn frontend frameworks like: Vue, Angular,Next.js and many more, if I will need it to learn. From backend Node.js."
            />
            <AboutParagraph
              header="Personal life"
              text=' "A strong body makes the mind strong". After developing I really like to go to the gym, reading books, running or spend the time with my family.'
            />
          </Fade>
        </article>
      </div>
    </section>
  );
};
export default About;

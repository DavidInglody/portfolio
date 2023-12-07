import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";


export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Next.js",
    icon: <TbBrandNextjs className="h-16 w-16 text-emerald-500" />,
    text: "Experiencing with this kind of React framework. Working on full-stack app with Next.js server components. Fetching API via Prisma DB connected on PlanetScale page.",
  },
  {
    id: nanoid(),
    title: "GitHub",
    icon: <FaGithub className="h-16 w-16 text-emerald-500" />,
    text: "Using GitHub, for deploying my projects. I have some knowledge with branches, pull, push, merge, conflict etc. Know framework GitKraken, but mostly every framework working same. ",
  },
  {
    id: nanoid(),
    title: "SQL",
    icon: <BiLogoPostgresql className="h-16 w-16 text-emerald-500" />,
    text: "I worked with MySQL database via PHP connected by XAMPP. I have a little bit experience with database PostgreSQL. So I have basic with SQL language. Now I working with Prisma DB.",
  },
];

import { FaGithubSquare} from "react-icons/fa"
import {MdZoomOutMap} from "react-icons/md"

const ProjectsCard = ({img,url,github,title,text}) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-slate-100 duration-300">
      <a href={url}>
        <img
          className="w-full object-cover rounded-t-lg h-64"
          src={img}
          alt={title}
        />
      </a>
      <div className="capitalize p-8">
        <h4 className="text-xl tracking-wide font-medium">{title}</h4>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
        <div className="flex mt-4 gap-x-4 ">
          <a href={url}>
            <MdZoomOutMap className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
}
export default ProjectsCard
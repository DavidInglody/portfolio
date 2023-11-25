import { useFetchProjects } from "./FetchProjects"
import ProjectsCard from "./ProjectsCard"
// import {projects} from "../data"
import SectionTitle from "./SectionTitle"


const Projects = () => {
  const {loading, projects} = useFetchProjects()
  console.log(projects);
  if(loading){
    return <div>...Loading</div>
  }
  return <section className="align-element py-20" id="projects">
    <SectionTitle text={"My portfolio"}/>
    <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project)=>{
            return <ProjectsCard key={project.id} {...project}/>
    })}
    </div>

  </section>
}
export default Projects
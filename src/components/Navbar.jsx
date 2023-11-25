import {links} from "../data"
import image from "../assets/trial_logo.png"

const Navbar = () => {
  return <nav className="bg-emerald-100">
    <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <img src={image} alt="logo" className="w-44" />
        <div className="flex gap-x-3">
            {links.map((link)=>{
                const {id,href,text}= link
                return <a key={id} href={href} className="capitalize text-lg tracking-wide font-medium hover:text-emerald-600 hover:underline  duration-300">
                        {text}
                    </a>
            })}
        </div>
    </div>
  </nav>
}
export default Navbar
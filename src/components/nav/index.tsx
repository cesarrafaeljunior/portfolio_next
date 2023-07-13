import {AiOutlineHome} from "react-icons/ai"
import {AiFillExclamationCircle} from "react-icons/ai"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"

export const NavComponent = () => {
    return (
        <nav className="absolute right-40 top-[1.5rem]">
        <ul className="flex items-center justify-center gap-[2.5rem] text-[1.2rem]">
          <li className="w-full flex items-center gap-[0.5rem] justify-center">
            <AiOutlineHome className="text-[1.3rem]"/>
            <a href="#home" className="hover:text-violet-500 transition delay-[0.1s]">
              Home
            </a>
          </li>
          <li className="w-full flex items-center gap-[0.5rem] justify-center">
            <AiFillExclamationCircle/>
            <a href="#about" className="hover:text-violet-500 transition delay-[0.1s]">
              About
            </a>
          </li>
          <li className="w-full flex items-center gap-[0.5rem] justify-center">
            <AiOutlineFundProjectionScreen/>
            <a href="#projects" className="hover:text-violet-500 transition delay-[0.1s]">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    )
}
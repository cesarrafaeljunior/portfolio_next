import {AiOutlineHome} from "react-icons/ai"
import {AiFillExclamationCircle} from "react-icons/ai"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"

export const NavComponent = () => {
    return (
        <nav className="fixed right-[25rem] top-[1.5rem] p-[1rem] bg-zinc-900 rounded-[20px] z-10 phone:w-[100%] phone:right-[0] phone:top-[42.5rem] phone:p-[0.5rem] phone:bg-zinc-800 phone:rounded-none phone:z-10">
          <ul className="flex items-center justify-center gap-[2.5rem] text-[1.2rem] phone:text-[1rem] phone:gap-[1.5rem]">
            <li className="w-full flex items-center gap-[0.5rem] justify-center">
              <AiOutlineHome className="text-[1.3rem] phone:text-[1rem]"/>
              <a href="#home" className="hover:text-violet-500 transition delay-[0.1s]">
                Home
              </a>
            </li>
            <li className="w-full flex items-center gap-[0.5rem] justify-center">
              <AiFillExclamationCircle className="text-[1.3rem] phone:text-[1rem]"/>
              <a href="#about" className="hover:text-violet-500 transition delay-[0.1s]">
                About
              </a>
            </li>
            <li className="w-full flex items-center gap-[0.5rem] justify-center">
              <AiOutlineFundProjectionScreen className="text-[1.3rem] phone:text-[1rem]"/>
              <a href="#projects" className="hover:text-violet-500 transition delay-[0.1s]">
                Projects
              </a>
            </li>
          </ul>
      </nav>
    )
}
import Image from "next/image"
import Logo from "../../assets/img/logo.png"
import {AiOutlinePhone} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import { IconsSocialFooter } from "./iconsSocialFooter"

export const Footer = () => {
    return(
      <footer className="text-center pt-[1rem] w-full">
        <div className="max-w-screen-xl m-auto">
            <div className="w-full h-full flex items-center justify-between px-[1rem]">
                <Image src={Logo} alt="Logo"/>
                <span className="w-[80%] h-[2px] bg-gray-500"></span>
            </div>
            <nav className="px-[1rem] flex flex-col phone:flex-row">
                <ul className="flex justify-around my-[2.5rem] phone:flex-col phone:gap-[1rem]">
                    <li>
                        <div className="flex flex-col gap-[2rem] items-center phone:flex-row">
                            <h2 className="text-[1.2rem] font-bold">Menu</h2>
                            <a href="#home" className="transition delay-[0.1s] hover:text-violet-500">Home</a>
                            <a href="#about" className="transition delay-[0.1s] hover:text-violet-500">About</a>
                            <a href="#projects" className="transition delay-[0.1s] hover:text-violet-500">Projects</a>
                        </div>
                    </li>
                    <IconsSocialFooter/>
                    <li>
                        <div className="flex flex-col gap-[2rem] pb-[1rem] phone:gap-[0.5rem] phone:items-start">
                            <h4 className="text-[1.2rem] font-bold">Contatos</h4>
                            <div className="flex flex-col phone:flex-row gap-[1rem] phone:gap-[0.5rem]">
                                <div className="flex gap-[0.2rem] items-center">
                                    <AiOutlinePhone className="text-[2rem] phone:text-[1rem]"/>
                                    <p className="font-bold"><a href="https://wa.me/+5535999778571" target="_blank" className="hover:text-violet-200 phone:text-[0.8rem]">+55 35 9 97416468</a></p>
                                </div>
                                <div className="flex gap-[0.2rem] items-center">
                                    <AiOutlineMail className="text-[2rem] phone:text-[1rem]"/>
                                    <p className="font-bold phone:text-[0.8rem]">cesarrdev@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
      </footer>
    )
}
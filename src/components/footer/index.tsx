import Image from "next/image"
import Logo from "../../assets/img/logo.png"
import {AiOutlinePhone} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"

export const Footer = () => {
    return(
      <footer className="text-center pt-[3rem] py-[0.2rem] w-full mt-[2rem]">
        <div className="max-w-screen-xl m-auto">
            <div className="w-full h-full flex items-center justify-between">
                <Image src={Logo} alt="Logo"/>
                <span className="w-[80%] h-[2px] bg-gray-500"></span>
            </div>
            <nav>
                <ul className="flex justify-around my-[2.5rem]">
                    <li>
                        <div className="flex flex-col gap-[2rem]">
                            <h2 className="text-[1.2rem] font-bold">Menu</h2>
                            <a href="#home" className="transition delay-[0.1s] hover:text-violet-500">Home</a>
                            <a href="#about" className="transition delay-[0.1s] hover:text-violet-500">About</a>
                            <a href="#projects" className="transition delay-[0.1s] hover:text-violet-500">Projects</a>
                        </div>
                    </li>
                    <li>
                      <ul className="flex flex-col gap-[2rem] items-start">
                        <h4 className="text-[1.2rem] font-bold">Redes sociais</h4>
                        <li className="flex items-center gap-[1rem]">
                            <AiFillFacebook className="text-[2rem] text-blue-600"/>
                            <a href="https://www.facebook.com/profile.php?id=100081806496662" target="_blank" className="transition delay-[0.1s] hover:text-violet-500">Facebook</a>
                            
                        </li>
                        <li className="flex items-center gap-[1rem]">
                            <AiFillInstagram className="text-[2rem] text-red-500"/>
                            <a href="https://www.instagram.com/cesarrafaeljunior/?next=%2F" target="_blank" className="transition delay-[0.1s] hover:text-violet-500">Instagram</a>
                        </li>
                        <li className="flex items-center gap-[1rem]">
                            <AiFillLinkedin className="text-[2rem] text-blue-400"/>
                            <a href="https://www.linkedin.com/in/cesarrafaeljunior/" target="_blank" className="transition delay-[0.1s] hover:text-violet-500">Linkedin</a>
                        </li>
                        <li className="flex items-center gap-[1rem]">
                            <AiFillGithub className="text-[2rem] text-slate-200"/>
                            <a href="https://github.com/cesarrafaeljunior" target="_blank" className="transition delay-[0.1s] hover:text-violet-500">Github</a>
                        </li>
                        <li className="flex items-center gap-[1rem]">
                            <AiFillYoutube className="text-[2rem] text-red-600"/>
                            <a href="https://www.youtube.com/channel/UCpdVr_VOiU52sYTVY-uXc_A" target="_blank" className="transition delay-[0.1s] hover:text-violet-500">Youtube</a>
                        </li>         
                      </ul>
                    </li>
                    <li>
                        <div className="flex flex-col gap-[2rem]">
                            <h4 className="text-[1.2rem] font-bold">Contatos</h4>
                            <div className="flex gap-[1rem] items-center">
                                <AiOutlinePhone className="text-[2rem]"/>
                                <p className="font-bold"><a href="https://wa.me/+5535999778571" target="_blank" className="hover:text-violet-200">+55 35 9 99778571</a></p>
                            </div>
                            <div className="flex gap-[1rem] items-center">
                                <AiOutlineMail className="text-[2rem]"/>
                                <p className="font-bold">cesarrdev@gmail.com</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
      </footer>
    )
}
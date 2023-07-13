import Image from "next/image"
import Logo from "../../assets/img/logo.png"
import {AiOutlinePhone} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"

export const Footer = () => {
    return(
      <footer className="text-center pt-[2rem] py-[3rem] w-full mt-[2rem]">
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
                      <div className="flex flex-col gap-[2rem]">
                        <h4 className="text-[1.2rem] font-bold">Redes sociais</h4>
                        <a href="https://www.facebook.com/profile.php?id=100081806496662" target="_blank" className="transition delay-[0.1s] hover:text-violet-500">Facebook</a>
                        <a href="https://www.instagram.com/cesarrafaeljunior/?next=%2F" target="_blank" className="transition delay-[0.1s] hover:text-violet-500">Instagram</a>
                        <a href="https://www.linkedin.com/in/cesarrafaeljunior/" target="_blank" className="transition delay-[0.1s] hover:text-violet-500">Linkedin</a>
                        <a href="https://github.com/cesarrafaeljunior" target="_blank" className="transition delay-[0.1s] hover:text-violet-500">Github</a>
                        <a href="https://www.youtube.com/channel/UCpdVr_VOiU52sYTVY-uXc_A" target="_blank" className="transition delay-[0.1s] hover:text-violet-500">Youtube</a>
                      </div>
                    </li>
                    <li>
                        <div className="flex flex-col gap-[2rem]">
                            <h4 className="text-[1.2rem] font-bold">Contatos</h4>
                            <div className="flex gap-[1rem] items-center">
                                <AiOutlinePhone className="text-[2rem]"/>
                                <p className="font-bold">+55 35 9 99778571</p>
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
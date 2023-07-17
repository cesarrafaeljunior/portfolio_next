import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"

export const IconsSocialFooter = () => {
    return (
        <ul className="flex flex-col gap-[2rem] items-start phone:gap-[0.5rem]">
            <h4 className="text-[1.2rem] font-bold">Redes sociais</h4>
            <div className="w-[100] flex flex-col gap-[2rem] phone:flex-row phone:flex-wrap">
                <li className="flex items-center gap-[1rem]">
                    <AiFillFacebook className="text-[2rem] text-blue-600"/>
                    <a href="https://www.facebook.com/profile.php?id=100081806496662" target="_blank" className="transition delay-[0.1s] hover:text-violet-500 phone:hidden">Facebook</a>
                    
                </li>
                <li className="flex items-center gap-[1rem]">
                    <AiFillInstagram className="text-[2rem] text-red-500"/>
                    <a href="https://www.instagram.com/cesarrafaeljunior/?next=%2F" target="_blank" className="transition delay-[0.1s] hover:text-violet-500 phone:hidden">Instagram</a>
                </li>
                <li className="flex items-center gap-[1rem]">
                    <AiFillLinkedin className="text-[2rem] text-blue-400"/>
                    <a href="https://www.linkedin.com/in/cesarrafaeljunior/" target="_blank" className="transition delay-[0.1s] hover:text-violet-500 phone:hidden">Linkedin</a>
                </li>
                <li className="flex items-center gap-[1rem]">
                    <AiFillGithub className="text-[2rem] text-slate-200"/>
                    <a href="https://github.com/cesarrafaeljunior" target="_blank" className="transition delay-[0.1s] hover:text-violet-500 phone:hidden">Github</a>
                </li>
                <li className="flex items-center gap-[1rem]">
                    <AiFillYoutube className="text-[2rem] text-red-600"/>
                    <a href="https://www.youtube.com/channel/UCpdVr_VOiU52sYTVY-uXc_A" target="_blank" className="transition delay-[0.1s] hover:text-violet-500 phone:hidden">Youtube</a>
                </li>  
            </div>
       
      </ul>
    )
}
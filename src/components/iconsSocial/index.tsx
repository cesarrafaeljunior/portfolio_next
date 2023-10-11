import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"

export const IconsSocial = () => {
    return (
        <div className="w-full flex justify-start text-[2rem] gap-[1rem]">
            <a href="https://www.linkedin.com/in/cesarrafaeljunior/" target="_blank" className=" transition ease-out delay-[0.1s] hover:text-violet-400"><AiFillLinkedin/></a>
            <a href="https://github.com/cesarrafaeljunior" target="_blank" className="transition ease-out delay-[0.1s]  hover:text-violet-400"><AiFillGithub/></a>
            <a href="https://www.instagram.com/cesarrafaeljunior/?next=%2F" target="_blank" className="transition ease-out delay-[0.1s]  hover:text-violet-400"><AiFillInstagram/></a>
        </div>
    )
}
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"

export const IconsSocial = () => {
    return (
        <div className="w-full flex justify-between text-[2rem]">
            <a href="#Linkedin" className=" transition ease-out delay-[0.1s] hover:text-violet-400"><AiFillLinkedin/></a>
            <a href="#Github" className="transition ease-out delay-[0.1s]  hover:text-violet-400"><AiFillGithub/></a>
            <a href="#Instagram" className="transition ease-out delay-[0.1s]  hover:text-violet-400"><AiFillInstagram/></a>
            <a href="#Facebook" className="transition ease-out delay-[0.1s]  hover:text-violet-400"><AiFillFacebook/></a>
            <a href="#Youtube" className="transition ease-out delay-[0.1s]  hover:text-violet-400"><AiFillYoutube/></a>
        </div>
    )
}
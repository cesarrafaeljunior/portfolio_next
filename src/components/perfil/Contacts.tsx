import {AiOutlineMail} from "react-icons/ai"
import {AiOutlinePhone} from "react-icons/ai"
import { IconsSocial } from "../iconsSocial"

export const Contacts = () => {
    return(
        <section className="flex flex-col items-start self-end gap-[1rem] phone:gap-[2rem]  phone:mt-[2rem] phone:self-center">
            <div className="flex items-center gap-[0.5rem]">
                <AiOutlineMail className="text-[1.5rem]"/>
                <a className="hover:text-violet-200" href="mailto:cesarrdev@gmail.com" target="_blank"><p>cesarrdev@gmail.com</p></a>
            </div>
            <div className="flex items-center gap-[0.5rem]">
                <AiOutlinePhone className="text-[1.5rem]"/>
                <p><a href="https://wa.me/+5535999778571" target="_blank" className="hover:text-violet-200">+55 (35) 9 97416468</a></p>
            </div>
            <IconsSocial/>
            <button className="w-[240px] self-center bg-violet-700 border-none p-[0.5rem] rounded-[20px] font-bold text-slate-50 transition ease-in-out delay-[0.1s] hover:bg-slate-50 hover:text-violet-700"><a href="https://wa.me/+5535999778571" target="_blank">Entre em contato</a></button>
        </section>
    )
}
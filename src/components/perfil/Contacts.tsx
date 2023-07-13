import {AiOutlineMail} from "react-icons/ai"
import {AiOutlinePhone} from "react-icons/ai"
import { IconsSocial } from "../iconsSocial"

export const Contacts = () => {
    return(
        <section className="flex flex-col items-start self-end gap-[1rem]">
            <div className="flex items-center gap-[0.5rem]">
                <AiOutlineMail className="text-[1.5rem]"/>
                <p>cesarrdev@gmail.com</p>
            </div>
            <div className="flex items-center gap-[0.5rem]">
                <AiOutlinePhone className="text-[1.5rem]"/>
                <p>+55 (35) 9 99778571</p>
            </div>
            <IconsSocial/>
            <button className="w-[240px] self-center bg-violet-700 border-none p-[0.5rem] rounded-[20px] font-bold text-slate-50 transition ease-in-out delay-[0.1s] hover:bg-slate-50 hover:text-violet-700">Entre em contato</button>
        </section>
    )
}
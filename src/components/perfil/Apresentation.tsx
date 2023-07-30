import Image from "next/image"
import {FaLessThan} from "react-icons/fa"
import {FaGreaterThan} from "react-icons/fa"
import pefilIcon from "../../assets/img/perfil_img.jpg"

export const Apresentation = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex gap-[3rem] items-center phone:flex-col">
            <div className="w-[230px] h-[300px] flex flex-col justify-end items-end border border-violet-700 bg-zinc-700 rounded-t-none rounded-full border-y-0">
                <figure className="w-full h-[70%] flex rounded-full border border-violet-700 border-y-0">
                    <Image src={pefilIcon} alt="perfil image " width={500} height={500} quality={70} className="w-full h-full rounded-full object-fit"/>
                </figure>
            </div>
            <div>
                <div className="flex gap-[0.2rem] text-violet-700">
                    <FaLessThan/><FaGreaterThan/>  
                </div>
                <div className="flex flex-col gap-[1rem] ml-[1rem] my-[1rem] phone:items-start">
                    <h1><span className="text-4xl text-violet-700 phone:text-[2rem]">Olá</span>,<span className="text-[2.2rem] phone:text-[1.5rem]"> eu sou o César</span></h1>
                    <p className="text-violet-600">Desenvolvedor Full Stack</p>
                    <p className="text-gray-400">&quot;Conectando tecnologia e inovação, uma linha de código por vez&quot;</p>        
                </div>         
                <div className="flex gap-[0.2rem] text-violet-700 items-center">
                    <FaLessThan/><span className="text-[1.5rem] font-extrabold">/</span><FaGreaterThan/>  
                </div>
            </div>
            </div>
        </div>
    )
}
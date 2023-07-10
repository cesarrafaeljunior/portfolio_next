import Image from "next/image"
import pefilIcon from "../../assets/img/perfil_img.jpg"

export const Apresentation = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex gap-[3rem] items-center">
            <div className="w-[230px] h-[300px] flex flex-col justify-end items-end border border-violet-700 bg-zinc-700 rounded-t-none rounded-full border-y-0">
                <figure className="w-full h-[70%] flex rounded-full border border-violet-700 border-y-0">
                    <Image src={pefilIcon} alt="perfil image " width={500} height={500} quality={70} className="w-full h-full rounded-full object-fit"/>
                </figure>
            </div>
            <div className="flex flex-col gap-[1rem]">
                <h1><span className="text-4xl text-violet-700">Olá</span>,<span className="text-[2.2rem]"> eu sou o César</span></h1>
                <p className="text-violet-600">Desenvolvedor Full Stack</p>
                <p>Conectando tecnologia e inovação, uma linha de código por vez</p>
            </div>
            </div>
        </div>
    )
}
import { projects } from "@/database/projects"
import Image from "next/image"
import {AiOutlineArrowLeft} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"
import {AiFillTags} from "react-icons/ai"
import img from "../../assets/img/project_example.jpg"

export const Projects = () => {
    return (
        <div className="text-center mt-[2rem]">


            <h2 className="text-[2rem] text-violet-700 relative">Projetos</h2>
            <div className="relative w-full h-full flex items-center justify-center">
                <AiOutlineArrowLeft className="absolute top-[50%] left-[1rem] text-[5rem] cursor-pointer transition delay-[0.1s] hover:text-violet-700"/>
                <AiOutlineArrowRight className="absolute top-[50%] right-[1rem] text-[5rem] cursor-pointer transition delay-[0.1s] hover:text-violet-700"/>
                <ul className="w-[984px] h-[680px] flex overflow-x-hidden overflow-y-none p-[0.5rem] gap-[1rem]">
                    {projects.map(project => {
                        return (
                            <li key={project.id} className="min-w-full">
                                <div>
                                    <p className="text-start font-bold text-[1.5rem]">{project.title}</p>
                                    <div className="flex">
                                        <div className="flex items-end gap-[1rem]">
                                            <Image src={img} alt="qualquer" width={400} height={400}/> 
                                            <div className="flex flex-col gap-[1rem]">
                                                <a href="#" className="transition delay-[0.1s] hover:text-violet-500">Acessar repositório</a>
                                                <a href="#" className="transition delay-[0.1s] hover:text-violet-500">Visualizar projeto</a>                                            
                                            </div>       
                                        </div>
                                    </div>
                                    <ul className="flex gap-[25px] text-[0.9rem] font-medium items-center my-[1.8rem] mt-[2.5rem]">
                                        {
                                        
                                            project.techs.map(techs => {
                                                return (
                                                    <li key={techs} className="flex w-max h-max items-center gap-[1rem] bg-violet-400 p-[0.5rem] rounded-[1rem]">
                                                        <p>{techs}</p>
                                                        <AiFillTags className="min-w-[1rem] h-[1rem]"/>
                                                    </li>                                   
                                            )
                                        })}                                          
                                    </ul>
                                    <ul className="flex gap-[25px] text-[0.9rem] font-medium items-center my-[1rem]">
                                    {
                                        project.types.map(type => {
                                            return (
                                                <li key={type} className="flex w-max h-max items-center gap-[1rem] bg-slate-400 p-[0.5rem] rounded-[1rem]">
                                                    <p>{type}</p>
                                                    <AiFillTags/>
                                                </li>
                                            )
                                        })
                                    }

                                    </ul>         
                                    <div className="w-full flex flex-col items-center gap-[1rem] p-[1.5rem] bg-slate-950 rounded-[1rem] mt-[4rem]">
                                        <h4 className="font-bold text-[1.2rem]">Descrição do projeto</h4>
                                        <p>{project.description} </p>
                                    </div>
                                </div>  
                            </li>
                        )
                    })}
                    <p className="absolute top-[1rem] right-[11rem]">Projetos: 1/9</p>
                </ul>
            </div>
        </div>
    )
}
'use client'
import {useState} from "react"
import { projects } from "@/database/projects"
import Image from "next/image"
import {AiFillTags} from "react-icons/ai"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export const Projects = () => {

    const [projectNumber, setProjectNumber] = useState(0)

    const projectNextNumber = () => {
        setProjectNumber(projectNumber + 1)
    }

    const projectPreviousNumber = () => {
        setProjectNumber(projectNumber - 1)
    }

    return (
        <div className="text-center mt-[2rem]">
            <h2 className="text-[2rem] text-violet-700 relative font-bold phone:mt-[-3rem]">Projetos</h2>
            <div className="relative w-full h-full flex items-center justify-center">
                <Swiper navigation={true} modules={[Navigation]} onSlideNextTransitionStart={projectNextNumber} onSlidePrevTransitionStart={projectPreviousNumber} className=" w-[1000px] h-[800px] p-[0.5rem] phone:h-full">
                    {projects.map(project => {
                        return (
                            <SwiperSlide  key={project.id} className="px-[2.8rem] phone:px-[0]">
                                <div>
                                    <p className="text-start font-bold text-[1.5rem]">{project.title}</p>
                                    <div className="flex">
                                        <div className="flex items-end gap-[1rem] phone:mt-[2rem] phone:flex-col phone:items-center">
                                           <a href={project.deploy} target="_blank"> 
                                                <Image src={project.img_banner} alt={project.title} width={400} height={400} className="h-[15rem] cursor-pointer hover:brightness-75 transition delay-[0.1s] object-cover"/> 
                                            </a>
                                            <div className="flex flex-col gap-[1rem]">
                                                {project.repository && (
                                                    <a href={project.repository} className="transition delay-[0.1s] hover:text-violet-500 cursor-pointer" target="_blank">Acessar repositório</a>
                                                )}
                                                
                                                {project.type == "front-end" 
                                                    ? 
                                                    <a href={project.deploy} className="transition delay-[0.1s] hover:text-violet-500 cursor-pointer" target="_blank">Visualizar projeto</a>
                                                    :
                                                    <a href={project.deploy} className="transition delay-[0.1s] hover:text-violet-500 cursor-pointer" target="_blank">Visualizar documentação</a>
                                                }                                           
                                            </div>       
                                        </div>
                                    </div>
                                    <ul className="flex gap-[25px] text-[0.9rem] font-medium items-center my-[1.8rem] mt-[2.5rem]  phone:overflow-x-auto phone:flex-wrap phone:mt-[2rem] tablet:flex-wrap tablet:overflow-x-auto">
                                        {
                                        
                                            project.techs.map(techs => {
                                                return (
                                                    <li key={techs} className="flex w-max h-max items-center gap-[1rem] bg-violet-400 p-[0.5rem] rounded-[1rem] phone:text-[0.8rem]">
                                                        <p>{techs}</p>
                                                        <AiFillTags className="min-w-[1rem] h-[1rem] phone:min-w-[0.8rem] phone:h-[0.8rem]"/>
                                                    </li>                                   
                                            )
                                        })}                                          
                                    </ul>
                                    <ul className="flex gap-[25px] text-[0.9rem] font-medium items-center my-[1rem] phone:overflow-x-auto phone:flex-wrap phone:mt-[1.5rem]">
                                    {
                                        project.types.map(type => {
                                            return (
                                                <li key={type} className="flex w-max h-max items-center gap-[1rem] bg-slate-400 p-[0.5rem] rounded-[1rem] phone:text-[0.8rem]">
                                                    <p>{type}</p>
                                                    <AiFillTags className="min-w-[1rem] h-[1rem] phone:min-w-[0.8rem] phone:h-[0.8rem]"/>
                                                </li>
                                            )
                                        })
                                    }

                                    </ul>         
                                    <div className="w-full flex flex-col items-center gap-[1rem] p-[1.5rem] bg-slate-950 rounded-[1rem] mt-[2rem] min-h-[13rem]">
                                        <h4 className="font-bold text-[1.2rem]">Descrição do projeto</h4>
                                        <p>{project.description} </p>
                                    </div>
                                </div>  
                            </SwiperSlide>
                        )
                        })}
                </Swiper>
                    <p className="absolute top-[1rem] right-[11rem] phone:right-[0] phone:top-[2.5rem]">Projetos: {projectNumber + 1}/{projects.length}</p>
            </div>
        </div>
    )
}
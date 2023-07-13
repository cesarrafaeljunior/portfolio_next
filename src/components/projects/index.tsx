import { projects } from "@/database/projects"
import Image from "next/image"
import {AiOutlineArrowLeft} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"
import {AiFillTags} from "react-icons/ai"

export const Projects = () => {
    return (
        <div className="text-center mt-[2rem]">


            <h2 className="text-[2rem] text-violet-700">Projetos</h2>
            <div className="relative w-full h-full flex items-center justify-center">
                <AiOutlineArrowLeft className="absolute top-[50%] left-[1rem]"/>
                <AiOutlineArrowRight className="absolute top-[50%] right-[1rem]"/>
                <ul className="flex w-full">
                    {projects.map(project => {
                        return (
                            <li key={project.id}>
                                <div>
                                    <p>Portgeek</p>
                                    <div>
                                        <Image src="" alt="" />
                                        <div>
                                            <a href="#">Acessar repositório</a>
                                            <a href="#">Visualizar projeto</a>
                                        </div>
                                    </div>
                                    {
                                        project.techs.map(techs => {
                                            return (
                                                <div key={techs}> 
                                                    <div>
                                                        <p>{techs}</p>
                                                        <AiFillTags/>
                                                    </div>                                   
                                                </div>
                                            )
                                    })}
                                    {
                                        project.types.map(type => {
                                            return (
                                                <div key={type}>
                                                    <p>{type}</p>
                                                    <AiFillTags/>
                                                </div>
                                            )
                                        })
                                    }
                                    <div>
                                        <h4>Descrição do projeto</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>
                                    </div>
                                </div>  
                                <p>Projetos: 1/9</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
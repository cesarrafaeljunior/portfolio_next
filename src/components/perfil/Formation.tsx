import {BiLogoJavascript} from "react-icons/bi"
import {BiLogoReact} from "react-icons/bi"
import {TbDatabaseSearch} from "react-icons/tb"
import {BiLogoPython} from "react-icons/bi"
import {BiLogoNodejs} from "react-icons/bi"
import { IconTech } from "../iconsTechs"


export const FormationInfos = () => {
    return (
        <section className="flex justify-between gap-[2rem] w-full mt-[2rem]">
            <div className="w-[100%] phone:flex fphone: flex-col phone: items-center">
                <h2 className="font-bold my-[1rem]">Formação</h2>
                <p className="w-[50%] text-gray-400 phone:w-[100%]  phone:text-center">Formado pela instituição Kenzie Academy Brasil como <strong>Técnico em programação</strong></p>
                <h3 className="text-[1.2rem] my-[2.5rem] font-bold">Principais tecnologias</h3>
                <div className="w-[50%] flex gap-[2rem] phone:w-[100%] phone:overflow-x-auto phone:px-[1rem] phone:py-[1rem]">
                    <IconTech icon={BiLogoJavascript} title="JavaScript"/>
                    <IconTech icon={BiLogoReact} title="React"/>
                    <IconTech icon={TbDatabaseSearch} title="Sql"/>
                    <IconTech icon={BiLogoPython} title="Python"/>
                    <IconTech icon={BiLogoNodejs} title="Node.js"/>
                </div>
            </div>
        </section>
    )
}
import {BiLogoJavascript} from "react-icons/bi"
import {BiLogoReact} from "react-icons/bi"
import {TbDatabaseSearch} from "react-icons/tb"
import {BiLogoPython} from "react-icons/bi"
import {BiLogoNodejs} from "react-icons/bi"
import { IconTech } from "../iconsTechs"


export const FormationInfos = () => {
    return (
        <section className="flex items-center justify-between gap-[2rem] w-full">
            <div>
                <h2 className="font-bold my-[1rem]">Formação</h2>
                <p className="w-[50%] text-gray-400">Formado pela instituição Kenzie Academy Brasil como Técnico em programação</p>
                <h3 className="text-[1.2rem] my-[2.5rem] font-bold">Principais tecnologias</h3>
                <div className="w-[50%] flex gap-[2rem]">
                    <IconTech icon={BiLogoJavascript} percentage="100%" title="JavaScript"/>
                    <IconTech icon={BiLogoReact} percentage="100%" title="React"/>
                    <IconTech icon={TbDatabaseSearch} percentage="100%" title="Sql"/>
                    <IconTech icon={BiLogoPython} percentage="100%" title="Python"/>
                    <IconTech icon={BiLogoNodejs} percentage="100%" title="Node.js"/>
                </div>
            </div>
        </section>
    )
}
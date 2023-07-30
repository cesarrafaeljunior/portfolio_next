import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { NavComponent } from "@/components/nav";
import { Perfil } from "@/components/perfil";
import { Projects } from "@/components/projects";
import {BsMouse} from "react-icons/bs"

export default function Home() {
  return (
  <>
    <div className="max-w-7xl m-auto">
      <main className="justify-start bg-zinc-900 relative px-[2rem]">
        <section className="w-full flex flex-col relative" id="home">
          <NavComponent/>
          <Perfil.Apresentation/>
          <div className="flex items-center gap-[2rem] w-full phone:flex-col phone:gap-[1rem]">
            <Perfil.FormationInfos/>
            <Perfil.Contacts/>
          </div>
          <div className="flex items-center absolute bottom-[-8rem] self-center mouseAnimation mt-[5rem] phone:hidden">
            <BsMouse className="text-[2rem]"/>
            <p>Role para baixo</p>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-full h-full mt-[15rem] phone:mt-0" id="about">
          <About/>
        </section>
        <section className="dlex flex-col items-center w-full h-100 m-[0 auto] max-w-screen-xl" id="projects">
          <Projects/>
        </section>
      </main>
    </div>
    <section className="w-full bg-slate-950">
        <Footer/>
    </section>
  </>
  )
}

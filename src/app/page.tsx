import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { NavComponent } from "@/components/nav";
import { Perfil } from "@/components/perfil";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
  <>
    <div className="max-w-screen-xl m-auto">
      <main className="bg-zinc-900 relative">
        <section className="w-full h-full flex flex-col relative" id="home">
          <NavComponent/>
          <Perfil.Apresentation/>
          <div className="flex items-center gap-[2rem] w-full">
            <Perfil.FormationInfos/>
            <Perfil.Contacts/>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-full h-full" id="about">
          <About/>
        </section>
        <section className="dlex flex-col items-center w-full h-100 m-[0 auto] max-w-screen-xl" id="projects">
          <Projects/>
        </section>
      </main>
    </div>
    <section className="w-full bg-slate-950 mt-[10rem]">
        <Footer/>
    </section>
  </>
  )
}

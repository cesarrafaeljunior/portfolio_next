import { About } from "@/components/about";
import { NavComponent } from "@/components/nav";
import { Perfil } from "@/components/perfil";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="max-w-screen-xl m-auto">
      <main className="bg-zinc-900 relative">
        <section className="w-full h-full flex flex-col relative">
          <NavComponent/>
          <Perfil.Apresentation/>
          <div className="flex items-center gap-[2rem] w-full">
            <Perfil.FormationInfos/>
            <Perfil.Contacts/>
          </div>
        </section>
        <section>
          <About/>
        </section>
        <section>
          <Projects/>
        </section>
      </main>
    </div>
  )
}

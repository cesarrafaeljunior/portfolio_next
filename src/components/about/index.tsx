export const About = () => {
    return (
        <>
            <h2 className="text-[2rem] font-bold text-violet-700 m-[5rem] phone:w-[100%] phone:text-center">Sobre mim</h2>
            <div className="max-w-[800px] flex flex-col items-center">
                <p className="leading-[1.8] phone:mt-[-4rem]">Olá, meu nome é César e sou um desenvolvedor Full-Stack apaixonado por criar soluções tecnológicas inovadoras. Tenho vasta experiência trabalhando em equipe, onde valorizo a colaboração e o compartilhamento de conhecimento para alcançar resultados excepcionais.
                <br />
                <br />
                Além de dominar diversas tecnologias, sou conhecido pela minha velocidade em desenvolvimento, sendo capaz de entregar soluções eficientes e de alta qualidade dentro dos prazos estabelecidos. Minha paixão pela programação me impulsiona a buscar constantemente aprimoramento e aprendizado, mantendo-me atualizado com as últimas tendências e melhores práticas do mercado.
                </p>
                <span className="w-full h-[2px] my-[1rem] bg-slate-50"></span>
            </div>    
            <div className="w-full h-full flex items-center justify-between my-[2rem] phone:flex-col ">
                <div className="w-[40%] h-full flex flex-col justify-between items-center gap-[1.5rem] leading-[1.5] phone:w-[100%] ">
                    <h2 className="text-[1.5rem] font-bold phone:mt-[-2rem]">Front End</h2>
                    <p className=" leading-[1.8]">Proficiente em React e Next.js, utilizando controladores de estado para gerenciamento eficiente de dados e integração com APIs de back-end. Experiência na criação de interfaces responsivas e acessíveis, utilizando bibliotecas de estilização como CSS Modules e Styled Components. Conhecimento em conceitos avançados de UI/UX, otimização de performance e testes automatizados.
                    </p> 
                    <span className="w-full h-[2px] bg-slate-50"></span>    
                </div>
                <div className="w-[40%] h-full flex flex-col justify-between items-center gap-[1.5rem] leading-[1.5]  phone:w-[100%]">
                    <h2 className="text-[1.5rem] font-bold phone:mt-[2rem]">Back End</h2>
                    <p className=" leading-[1.8]">
                         Experiente em Node.js, Express e Prisma. Domínio na criação de APIs robustas e escaláveis, implementação de autenticação e autorização seguras, manipulação eficiente de bancos de dados relacionais e construção de consultas otimizadas. Também possui conhecimentos sólidos em arquitetura de microsserviços, integração de serviços terceirizados e práticas de desenvolvimento ágil.
                    </p>
                    <span className="w-full h-[2px] bg-slate-50"></span>
                </div>
            </div>
        </>
    )
}
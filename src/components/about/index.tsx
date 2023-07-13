export const About = () => {
    return (
        <>
            <h2 className="text-[2rem] font-bold text-violet-700 m-[5rem]">Sobre mim</h2>
            <p className="leading-[1.8]">Olá, meu nome é César e sou desenvolvedor Full-Stack. Sou apaixonado por tecnologia e pelos desafios que esta área   
            Minha paixão pela tecnologia e curiosidade me fizeram mergulhar nos &aposdois mundos&lsquo da programação, Front-End e Back-End, o que me permitiu adquirir experiência para ser considerado um programador Full-Stack. Trabalho com tecnologias como React para executar um código mais limpo e bem testado através de seu sistema de Componentização, React-Native para construir aplicativos componentizados e performáticos, Node para construir APIs gerenciais para estabelecimentos, além da implementação de testes de integração e unitários. Utilizo também Python para construir APIs rapidamente, performáticas e escaláveis combinado com o Django, e bancos de dados SQL associados com Node e Python para persistir os dados.</p>
            <span className="w-full h-[2px] my-[1rem] bg-slate-50"></span>
            <div className="w-full h-full flex items-center justify-between my-[2rem]">
                <div className="w-[40%] h-full flex flex-col justify-between items-center gap-[1.5rem] leading-[1.5]">
                    <h2 className="text-[1.5rem] font-bold">Front End</h2>
                    <p className=" leading-[1.8]">Proficiente em React e Next.js, utilizando controladores de estado para gerenciamento eficiente de dados e integração com APIs de back-end. Experiência na criação de interfaces responsivas e acessíveis, utilizando bibliotecas de estilização como CSS Modules e Styled Components. Conhecimento em conceitos avançados de UI/UX, otimização de performance e testes automatizados.</p>
                </div>
                <div className="w-[40%] h-full flex flex-col justify-between items-center gap-[1.5rem] leading-[1.5]">
                    <h2 className="text-[1.5rem] font-bold">Back End</h2>
                    <p className=" leading-[1.8]">
                         Experiente em Node.js, Express e Prisma. Domínio na criação de APIs robustas e escaláveis, implementação de autenticação e autorização seguras, manipulação eficiente de bancos de dados relacionais e construção de consultas otimizadas. Também possui conhecimentos sólidos em arquitetura de microsserviços, integração de serviços terceirizados e práticas de desenvolvimento ágil.
                    </p>
                </div>
            </div>
        </>
    )
}
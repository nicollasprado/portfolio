import ProjectCard from "../components/ProjectCard";

function Projetos(){
    return (
        <div className="flex flex-col items-center gap-25">
            <h1 className="text-amber-300 font-extrabold">PROJETOS</h1>
            <ol className="w-[99vw] flex flex-wrap justify-evenly">
                <li>
                    <ProjectCard 
                        name={"Site E-Commerce"}
                        description={"Site de E-Commerce feito com API restful e banco de dados relacional."}
                        tecnologias={["Java", "Springboot", "ReactJs", "MySql"]}
                        imgSrc={"https://i.imgur.com/5tWOeOz.png"}
                        redirect={"https://github.com/nicollasprado/ecommerce_API"}
                    />
                </li>
                <li>
                    <ProjectCard 
                        name={"E-Commerce"}
                        description={"Site com sistema de registro, login e gerenciamento de usuários."}
                        tecnologias={["Python", "Flask", "MySql", "Bootstrap"]}
                        imgSrc={"https://i.imgur.com/tjarL2K.png"}
                        redirect={"https://github.com/nicollasprado/E-Commerce"}
                    />
                </li>
                <li>
                    <ProjectCard 
                        name={"Calculadora de Binários"}
                        description={"Conversão de vários tipos diferentes de números binários."}
                        tecnologias={["Python", "Flask"]}
                        imgSrc={"https://i.imgur.com/8IeNqhc.jpeg"}
                        redirect={"https://github.com/nicollasprado/Calculadora-Binario"}
                    />
                </li>
            </ol>
        </div>
    );
}

export default Projetos
import TecCard from "../components/TecCard";

function Sobre(){
    return (
        <div className="flex flex-col items-center gap-5">
            <h1 className="text-amber-300 font-extrabold">SOBRE MIM</h1>
            <div className="flex drop-shadow-2xl shadow-2xl">
                <img src="https://i.imgur.com/274oycR.jpeg" alt="Minha foto" className="w-[30em]"/>
                <div className="flex flex-col gap-10 bg-purple-700 w-300 h-160 rounded-r-3xl p-5">
                    <div className="flex flex-col gap-5">
                        <p className="text-white font-normal text-2xl">Olá, meu nome é <b className="text-green-400">Nicollas Prado</b> e já estou estudando desenvolvimento de software a 2 anos. Atualmente estou no 2º período do curso de <b className="text-green-400">Análise e Desenvolvimento de Software no</b> <a href="https://portal.ifrn.edu.br/" target="_blank"><b className="text-emerald-400 underline hover:text-green-300">IFRN</b></a> onde já estudei matérias fundamentais para a área como Algoritmos, Programação Orientada a Objetos, Web Design e Arquitetura de Computadores.</p>
                        <p className="text-white font-normal text-2xl">Além da faculdade, eu <b className="text-green-400">estou sempre em busca de novos conhecimentos e aplicando-os em projetos pessoais</b> que ajudem a desenvolver minhas habilidades técnicas e pessoais. Ademais, tenho um nível de <b className="text-green-400">inglês avançado</b> conseguindo falar, entender, ler e escrever nesse idioma sem dificuldades.</p>
                    </div>

                    <h2 className="text-amber-400 font-bold text-3xl">Minhas Principais Tecnologias:</h2>
                    <ol className="flex justify-around">
                        <li> <TecCard name={"Java"} imgSrc={"https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Java-Dark.svg"} /> </li>
                        <li> <TecCard name={"Springboot"} imgSrc={"https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Spring-Dark.svg"} /> </li>
                        <li> <TecCard name={"MySql"} imgSrc={"https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MySQL-Dark.svg"} /> </li>
                        <li> <TecCard name={"Postgres"} imgSrc={"https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PostgreSQL-Dark.svg"} /> </li>
                        <li> <TecCard name={"Linux"} imgSrc={"https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Linux-Dark.svg"} /> </li>
                        <li> <TecCard name={"ReactJs"} imgSrc={"https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg"} /> </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Sobre
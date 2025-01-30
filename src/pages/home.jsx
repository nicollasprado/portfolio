import { FileText, Github, Linkedin, Mail } from "lucide-react";

function Home( { scrollToSection } ){
    return (
        <div className="flex items-center justify-center">
            <ol className="flex flex-col gap-5 pb-10">
                <li>
                    <a href="https://github.com/nicollasprado" target="_blank">
                        <Github className="text-green-400 hover:fill-blue-400 hover:text-blue-300 size-11" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/nicollas-prado-420082302/" target="_blank">
                        <Linkedin className="text-green-400 hover:fill-blue-400 hover:text-blue-300 size-11" />
                    </a>
                </li>
                <li>
                    <a href="https://drive.google.com/drive/folders/1NoIi5SDxFha1tm8lglFRkdtgHW4qIx7T?usp=sharing" target="_blank">
                        <FileText className="text-green-400 hover:fill-blue-400 hover:text-blue-300 size-11" />
                    </a>
                </li>
                <li>
                    <a href="mailto:nicollasprado.profissional@gmail.com" target="_blank">
                        <Mail className="text-green-400 hover:fill-blue-400 hover:text-blue-300 size-11"/>
                    </a>
                </li>
            </ol>
            <div className="flex items-center h-screen leading-30">
                <div>
                    <h2 className="text-amber-400 font-extrabold text-6xl ml-1.5">Olá, sou Nicollas</h2>
                    <h1 className="text-amber-300 font-black">BACKEND</h1>
                    <h1 className="text-amber-300 font-black">DEVELOPER</h1>
                    
                    <ol className="flex justify-around">
                        <li>
                            <button
                            className="hover:cursor-pointer hover:text-emerald-500 duration-500 text-amber-400 text-2xl font-bold"
                            onClick={() => scrollToSection('sobremim')}
                            >Sobre mim</button>
                        </li>
                        <li>
                            <button
                            className="hover:cursor-pointer hover:text-emerald-500 duration-500 text-amber-400 text-2xl font-bold"
                            onClick={() => scrollToSection('projetos')}
                            >Projetos</button>
                        </li>
                        <li>
                            <button
                            className="hover:cursor-pointer hover:text-emerald-500 duration-500 text-amber-400 text-2xl font-bold"
                            onClick={() => scrollToSection('cursos')}
                            >Cursos</button>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Home
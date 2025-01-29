import { Github, Languages, Moon } from "lucide-react"

function Header(){
    return (
        <header className="flex items-center justify-around border-b-purple-800 border-2 p-5">
            <div className="flex items-center gap-7">
                <a href="https://github.com/nicollasprado" target="_blank">
                    <Github className="cursor-pointer hover:fill-purple-700 border-transparent"/>
                </a>
                <h1>Nicollas Prado</h1>
            </div>

            <ol className="flex items-center gap-10">
                <li>
                    <a href="">Formação</a>
                </li>
                <li>
                    <a href="">Projetos</a>
                </li>
                <li>
                    <a href="">Habilidades</a>
                </li>
                <li>
                    <a href="">Links</a>
                </li>
            </ol>

            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 border-white border-2 rounded-2xl p-2 cursor-pointer hover:bg-purple-600">
                    <Languages className="text-white"/>
                    <p>Portuguese</p>
                </div>

                <div className="bg-purple-800 p-2 px-3 rounded-full cursor-pointer hover:bg-purple-600">
                    <Moon className="text-white" />
                </div>
            </div>
        </header>
    );
}

export default Header
import { ArrowUpRight } from "lucide-react";

function ProjectCard({ name, description, tecnologias, imgSrc, redirect }){
    return (
        <div className="w-90 h-fit bg-purple-400 shadow-2xl rounded-2xl">
            <img src={imgSrc} alt={name} className="rounded-t-2xl w-90 h-40 border-b-2 border-purple-700" />
            <div className="p-2">
                <h2 className="text-green-300 text-center font-bold text-[1.8em] border-purple-700 border-b-2 mb-2">{name}</h2>
                <div className="flex flex-col gap-2">
                    <p className="text-white text-[1.1em]">{description}</p>
                    <h3 className="text-green-300 text-xl font-bold">Tecnologias:</h3>
                    <ol className="flex flex-col flex-wrap text-white h-14 list-disc ml-10">
                        {tecnologias.map((tecnologia) =>
                            <li>{tecnologia}</li>
                        )}
                    </ol>
                    <a href={redirect} target="_blank" className="flex m-auto bg-green-300 hover:bg-emerald-400 duration-200 w-fit p-1 px-4 rounded-2xl">
                        <ArrowUpRight />
                        Clique para saber mais
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard
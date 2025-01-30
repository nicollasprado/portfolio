import CourseCard from "../components/courseCard"

function Cursos(){
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-amber-300 font-extrabold">CURSOS</h1>
            <ol className="flex flex-col items-center">
                <li>
                    <CourseCard 
                        name={"Análise e Desenvolvimento de Sistemas"}
                        subTitle={"Instituto Federal do Rio Grande do Norte - IFRN"}
                        date={"02/2024 - 12/2026"}
                        description={"Aqui desenvolvi minhas habilidades de desenvolvimento, análise, testes e organização de software."}
                        imgSrc={"https://i.imgur.com/jpPbmr6.png"}
                        courseSrc={"https://portal.ifrn.edu.br/"}
                    />
                </li>
            </ol>
        </div>
    )
}

export default Cursos
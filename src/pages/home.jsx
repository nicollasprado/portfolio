function Home(){
    const scrollToSection = (section) => {
        var section = document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen leading-30">
            <div>
                <h2 className="text-amber-400 font-extrabold text-6xl ml-1.5">Olá, sou Nicollas</h2>
                <h1 className="text-amber-300 font-black">BACKEND</h1>
                <h1 className="text-amber-300 font-black">DEVELOPER</h1>
                
                <ol className="flex justify-around">
                    <li>
                        <button className="hover:cursor-pointer hover:text-emerald-500 duration-500 text-amber-400 text-2xl font-bold" onClick={() => scrollToSection('sobremim')}>Sobre mim</button>
                    </li>
                    <li>
                        <button className="hover:cursor-pointer hover:text-emerald-500 duration-500 text-amber-400 text-2xl font-bold">Projetos</button>
                    </li>
                    <li>
                        <button className="hover:cursor-pointer hover:text-emerald-500 duration-500 text-amber-400 text-2xl font-bold">Cursos</button>
                    </li>
                    <li>
                        <button className="hover:cursor-pointer hover:text-emerald-500 duration-500 text-amber-400 text-2xl font-bold">Links</button>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home
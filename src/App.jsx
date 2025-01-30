import { useEffect, useState } from 'react'
import Home from './pages/home';
import EstrelasBG from './components/EstrelasBG';
import Sobre from './pages/sobre';
import ReturnMainButton from './components/returnMainButton';
import Projetos from './pages/projetos';
import Cursos from './pages/cursos';

function App() {
  const scrollToSection = (section) => {
    var section = document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const [activeSection, setActiveSection] = useState("main");

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = ["main", "sobremim", "projetos", "cursos"]
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const top = sectionElement.offsetTop;       // Distancia do elemento ate o topo do html
        const height = sectionElement.clientHeight; // tamanho do elemento
        if(window.scrollY >= top - height / 2 && window.scrollY < top + height / 2){
          setActiveSection(sectionId);
        }
      })
    }

    window.addEventListener("scroll", handleActiveSection);
  }, [])

  return (
    <main className='max-w-screen'>
      <div className='bg-radial from-purple-500 from-40% to-purple-900 h-[98vh]' id='main'>
        <EstrelasBG />
        <Home scrollToSection={scrollToSection} />
      </div>
      <div className='bg-purple-500 h-[98vh]' id="sobremim" >
        <Sobre />
      </div>
      <div className='bg-purple-600 h-[98vh]' id="projetos">
        <Projetos />
      </div>
      <div className='bg-purple-500 h-[95vh]' id="cursos" >
        <Cursos />
      </div>

      <ReturnMainButton activeSection={activeSection} scrollToSection={scrollToSection} />
    </main>
  );
}

export default App

import { useState } from 'react'
import Home from './pages/home';
import EstrelasBG from './components/EstrelasBG';
import Sobre from './pages/sobre';

function App() {
  const [page, setPage] = useState("home");

  return (
    <body className='max-w-screen h-screen'>
      <main>
        <div className='bg-radial from-purple-500 from-40% to-purple-900 max-w-screen h-[95vh]'>
          <EstrelasBG />
          <Home />
        </div>
        <div className='bg-purple-500 h-[100vh]' >
          <Sobre />
        </div>
      </main>
    </body>
  );
}

export default App

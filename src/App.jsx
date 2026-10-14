import { Routes, Route, Link } from 'react-router'
import Inicio from './pages/Inicio.jsx'
import MisClases from './pages/MisClases.jsx'
import Docentes from './pages/Docentes.jsx'

function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="usuario">Usuario: Vielka Figueroa</div>
        <nav>
          <Link className="enlace" to="/">Inicio</Link>
          <Link className="enlace" to="/clases">Mis Clases</Link>
          <Link className="enlace" to="/docentes">Docentes</Link>
        </nav>
      </aside>

      <div className="principal">
        <header className="topbar">
          <h1>Asignación Clases</h1>
        </header>
        <main className="contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/clases" element={<MisClases />} />
            <Route path="/docentes" element={<Docentes />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
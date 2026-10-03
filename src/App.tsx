import { NavLink, Outlet } from 'react-router'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <NavLink className="brand" to="/">
          OpenVerse
        </NavLink>

        <nav aria-label="Основная навигация">
          <NavLink to="/" end>
            Старт
          </NavLink>
          <NavLink to="/messenger">Мессенджер</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App

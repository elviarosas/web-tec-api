import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Cursos from "./Pages/Cursos.js";
import Usuarios from "./Pages/Usuarios.js";
import CreateUserForm from "./Components/Usuarios/CreateUserForm";
import Profile from "./Pages/Profile";
import Entregas from "./Pages/Entregas";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/entregas"> Entregas </Link>
          <Link to="/usuarios"> Usuarios </Link>
          <Link to="/cursos"> Cursos </Link>
          <Link to="/about"> About </Link>
          <Link to="/profile"> Profile </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entregas" element={<Entregas />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/cursos/" element={<Cursos />} />
          <Route path="/about" element={<About />} />
          <Route path="/createuserform" element={<CreateUserForm />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

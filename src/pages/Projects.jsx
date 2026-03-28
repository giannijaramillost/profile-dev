
import { useNavigate } from 'react-router-dom'; 

const Projects = () => {  // <-- Cambia de "Home" a "About"
  const navigate = useNavigate();  // <-- Hook para navegación

  return (
    <>
        <h1>Projects</h1>
        <button className="btn-nav" onClick={() => navigate("/")}>
            Go Home
        </button>   
    </>
  );
};

export default Projects;
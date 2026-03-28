
import { useNavigate } from 'react-router-dom'; 

const About = () => {  // <-- Cambia de "Home" a "About"
  const navigate = useNavigate();  // <-- Hook para navegación

  return (
    <>
      <h1>About me</h1>
      <p>ITC student at ITESM</p>
      <button className="btn-nav" onClick={() => navigate("/")}>
        Go Home
      </button>    
    </>
  );
};

export default About;
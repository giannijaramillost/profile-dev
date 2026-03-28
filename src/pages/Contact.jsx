
import { useNavigate } from 'react-router-dom'; 

const Contact = () => {  // <-- Cambia de "Home" a "About"
  const navigate = useNavigate();  // <-- Hook para navegación

  return (
    <>
        <h1>Contact</h1>
        <p>giannixavier10@gmail.com</p>
        <button className="btn-nav" onClick={() => navigate("/")}>
            Go Home
        </button>       
    </>
  );
};

export default Contact;
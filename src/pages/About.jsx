
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {  
  const navigate = useNavigate(); 

  return (
    <div className="about-container">
      <h1 className="about-title">About me</h1>
      
      <p className="about-profile">
        Software & Web Developer | ITC Student
      </p>

      <section className="about-section">
        <p className="about-text">
          Me gusta ver el software como un rompecabezas de arquitectura y lógica donde el límite es la creatividad. 
          Como estudiante de Ingeniería en Tecnologías Computacionales, disfruto experimentar con la eficiencia de los 
          algoritmos y, al mismo tiempo, construir interfaces web que realmente funcionen para el usuario.
        </p>

        <p className="about-text">
          He trabajado con C++, Python y SQL para resolver problemas complejos, como procesar grandes volúmenes de datos 
          mediante algoritmos de grafos (Dijkstra) para rastrear ataques de bots. Este tipo de retos me enseñó que los 
          datos cuentan información reveladora si sabes cómo manipularlos.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">¿Qué aporto más allá del código?</h2>

        <div className="about-values">
          <div className="value-item">
            <h3 className="value-title">Criterio de programador</h3>
            <p className="value-text">
              Entiendo que mi trabajo es facilitar el camino al cliente, no complicarlo con tecnicismos.
            </p>
          </div>

          <div className="value-item">
            <h3 className="value-title">Sinergia en equipo</h3>
            <p className="value-text">
              Me muevo bien en entornos de metodologías ágiles donde la comunicación clara y la distribución de roles 
              son clave para que el flujo de trabajo no se detenga.
            </p>
          </div>

          <div className="value-item">
            <h3 className="value-title">Visión de liderazgo</h3>
            <p className="value-text">
              Mi meta a largo plazo es dirigir equipos técnicos. Creo firmemente en crear espacios donde cada integrante 
              explote sus fortalezas y el grupo se apoye en sus debilidades para sacar proyectos adelante.
            </p>
          </div>
        </div>
      </section>

      <button className="btn-nav" onClick={() => navigate("/")}>
        Go Home
      </button>    
    </div>
  );
};

export default About;
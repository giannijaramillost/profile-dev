import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Projects.css';

//Imagenes proyectos
import project1img1 from '../assets/projects/project1-img1.png';
import project2img1 from '../assets/projects/project2-img1.png';
import project2img2 from '../assets/projects/project2-img2.png';

const ProjectCard = ({ title, description, date, githubLink, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="project-card">
      <div className="project-gallery">
        <img 
          src={images[currentImageIndex]} 
          alt={title} 
          className="project-image"
        />
        {images.length > 1 && (
          <>
            <button className="gallery-btn prev" onClick={prevImage}>❮</button>
            <button className="gallery-btn next" onClick={nextImage}>❯</button>
            <div className="image-counter">
              {currentImageIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-date">{date}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const navigate = useNavigate();

  const projectsData = [
    {
      title: "Project One",
      description: "Descripción de tu primer proyecto",
      date: "2024",
      githubLink: "https://github.com",
      images: [project1img1]
    },
    {
      title: "Project Two",
      description: "Descripción de tu segundo proyecto",
      date: "2024",
      githubLink: "https://github.com",
      images: [
        project2img1,
        project2img2
      ]
    }
  ];

  return (
    <>
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <button className="btn-nav" onClick={() => navigate("/")}>
        Go Home
      </button>   
    </>
  );
};

export default Projects;
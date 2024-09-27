// Projects.jsx
import './projects.module.css'; 
import { projectsData } from './projectsData';

export default function Projects()
{
    return(<div className="projects-page">
        <h1>Highlighted Projects</h1>
        <div className="projects-container">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h2>{project.title}</h2>
                <p><strong>Role:</strong> {project.role}</p>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>);
};
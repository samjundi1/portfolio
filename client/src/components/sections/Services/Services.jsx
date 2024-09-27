// Services.jsx

import './services.module.css'; 
import { servicesData } from './servicesData';
export default function Services () {
    return(
        <div className="services-container">
        <h1 className="services-title">Our Services</h1>
        <div className="services-list">
          {servicesData.map((service, index) => (
            <div className="service-item" key={index}>
              <img src={service.image} alt={service.title} className="service-image" />
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>)
};
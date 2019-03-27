import React from 'react';
import Service from './Service';
import './ServiceSection.scss';
import ServiceWithoutImage from './ServiceWithoutImage';

const ServiceSection = (props) => {
  const {pageName, services} = props;
  return (
    <section className={`serviceSection ${pageName}__serviceSection`} role="region" aria-labelledby="serviceSection__title">
      <div className="container">
        <h2 className="serviceSection__title" id="serviceSection__title">Services</h2>
        <ul className="list serviceList serviceSection__list">
          {
            services.map((service) => (
              <li key={service.name} className="serviceList__item">
                {
                  service.textOnly ?
                  <ServiceWithoutImage serviceData={service} /> :
                  <Service serviceData={service} />
                }
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}

export default ServiceSection;
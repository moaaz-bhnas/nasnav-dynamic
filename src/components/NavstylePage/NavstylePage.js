import React from 'react';
import Header from '../header/Header';
import Thriller from '../thriller/Thriller';
import ServiceSection from '../service/ServiceSection';

const NavstylePage = () => {
  const pageName = 'navbox';
  const header = {
    text: {
      paragraphs: [
        '*Device* download all your products on Google search engine',
        'Our services are not to be reckoned with upload Products can sliping in your home and see theyou an edge over the online competitors of big businesses data'
      ],
      button: 'Get Started'
    },
    images: [
      {src: screens, alt: 'NasNav platform opened on a tablet'}
    ]
  }
  const thriller = {
    paragraphs: [
      'Choose among great models to be featured',
      'Through a few simple steps can make your shop up to the public quickly.',
      'Aspernatur eligendi perspiciatis qui eveniet temporibus et. In molestias odio et et. Possimus ipsum facere saepe ullam id. Impedit est aut dicta autem modi reprehenderit ab occaecati.'
    ]
  }
  const services = [];
  return (
    <React.Fragment>
      <Header 
        pageName={pageName}
        contentWidth={'half'}
        imageWidth={'half'}
        text={header.text}
        images={header.images}
      />
      <Thriller paragraphs={thriller.paragraphs} />
      <ServiceSection 
        pageName={pageName}
        services={services} 
      />
    </React.Fragment>
  );
}

export default NavstylePage;
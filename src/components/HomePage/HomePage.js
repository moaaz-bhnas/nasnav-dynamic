import React from 'react';
import Header from '../Header/Header';

const HomePage = () => {
  const headerText = {
    paragraphs: [
      'Device download all your products on Google search engine',
      'Our services are not to be reckoned with upload Products can sliping in your home and see theyou an edge over the online competitors of big businesses data'
    ],
    button: 'Get Started'
  };
  return (
    <Header 
      contentWidthClass={'header__content_widthOnLargeViewport_overHalf'}
      text={headerText}
    />
  );
}

export default HomePage;
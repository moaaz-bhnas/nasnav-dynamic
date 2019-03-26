import React from 'react';
import Header from '../Header/Header';
import tablet from '../../image/home-header-tablet.png';
import phone from '../../image/home-header-phone.png';

const HomePage = () => {
  const pageName = 'home';
  const headerText = {
    paragraphs: [
      'Device download all your products on Google search engine',
      'Our services are not to be reckoned with upload Products can sliping in your home and see theyou an edge over the online competitors of big businesses data'
    ],
    button: 'Get Started'
  };
  const headerImages = [
    {src: tablet, alt: 'NasNav platform opened on a tablet'},
    {src: phone, alt: 'NasNav platform opened on a phone'}
  ];
  return (
    <Header 
      pageName={pageName}
      contentWidthClass={'header__content_widthOnLargeViewport_overHalf'}
      imageWidthClass={'header__content_widthOnLargeViewport_lessThanHalf'}
      text={headerText}
      images={headerImages}
    />
  );
}

export default HomePage;
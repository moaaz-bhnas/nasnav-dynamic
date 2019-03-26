import React from 'react';
import Topbar from './Topbar';
import curve from '../../image/curve-cropped.png';
import './Header.scss';
import HeaderContent from './HeaderContent';
import HeaderImage from './HeaderImage';

const Header = (props) => {
  const {pageName, overflowHidden, contentWidthClass, text, imageWidthClass, images} = props;
  return (
    <header 
      className={`header ${pageName} App__header`} 
      role="banner" 
      style={{overflow: overflowHidden ? 'hidden' : null}}
    >
      <div className="container">
        <h1 className="header__title">NasNav</h1>
        <Topbar />
        <HeaderContent 
          widthClass={contentWidthClass}
          text={text}
        />
        <HeaderImage 
          widthClass={imageWidthClass}
          images={images}
        />
      </div>
      <img 
        className="header__curve" 
        src={curve} alt="" 
        aria-hidden="true" 
        style={{zIndex: overflowHidden ? 1 : null}} 
      />
    </header>
  );
}

export default Header;
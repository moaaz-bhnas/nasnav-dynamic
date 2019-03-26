import React from 'react';
import Topbar from './Topbar';
import curve from '../../image/curve-cropped.png';
import './Header.scss';
import HeaderContent from './HeaderContent';

const Header = (props) => {
  const {overflowHidden, contentWidthClass, text} = props;
  return (
    <header 
      className="header App__header" 
      role="banner" 
      style={{overflow: overflowHidden ? 'hidden' : null}}
    >
      <div className="container">
        <h1 className="header__title">NasNav</h1>
        <Topbar />
        <HeaderContent 
          contentWidthClass={contentWidthClass}
          text={text}
        />
        {/* {props.headerImage} */}
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
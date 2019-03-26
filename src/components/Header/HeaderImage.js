import React from 'react';
import './HeaderImage.scss';

const HeaderImage = (props) => {
  const {images, widthClass} = props;
  return (
    <div className={`header__imageContainer ${widthClass}`}>
      {
        images.map((image) => (
          <img key={image.src} src={image.src} alt={image.alt} className="header__image"/>
        ))
      }
    </div>
  );
}

export default HeaderImage;